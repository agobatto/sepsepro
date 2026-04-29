import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    },
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Se não estiver logado e tentar acessar área logada, manda pro login
  if (!user && (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/update-password'))) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (user) {
    const requiresPasswordChange = user.user_metadata?.requires_password_change === true;

    // Se precisa mudar a senha e tenta acessar o dashboard, prende no update-password
    if (requiresPasswordChange && request.nextUrl.pathname.startsWith('/dashboard')) {
      const url = request.nextUrl.clone();
      url.pathname = '/update-password';
      return NextResponse.redirect(url);
    }

    // Se NÃO precisa mudar a senha e tenta acessar update-password, manda pro dashboard
    if (!requiresPasswordChange && request.nextUrl.pathname.startsWith('/update-password')) {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }

    // Se já tá logado e tenta acessar o login, manda pro dashboard (ou update-password se precisar)
    if (request.nextUrl.pathname === '/login') {
      const url = request.nextUrl.clone();
      url.pathname = requiresPasswordChange ? '/update-password' : '/dashboard';
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

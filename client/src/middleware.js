import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log('Middleware is running');

  const cookieStore = cookies();
  const authToken = cookieStore.get('authToken');

  const url = request.nextUrl.clone();

  if (authToken && url.pathname.startsWith('/authentication')) {
    url.pathname = '/dashboard/home';
    return NextResponse.redirect(url);
  }

  if (!authToken && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Matcher is used to restrict a webpage until a certain condition becomes true
export const config = {
  matcher: ['/dashboard/:path*', '/authentication/:path*'],
};

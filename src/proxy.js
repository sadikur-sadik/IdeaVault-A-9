import { NextResponse } from 'next/server';

export async function proxy(request) {
  const allCookies = request.cookies.getAll();

  // Check if any better-auth session cookie exists with a valid value
  const hasSession = allCookies.some(
    (cookie) =>
      (cookie.name.includes("better-auth") ||
        cookie.name.includes("session") ||
        cookie.name.includes("token")) &&
      cookie.value &&
      cookie.value.trim() !== ""
  );

  if (hasSession) {
    return NextResponse.next();
  }

  // Redirect to signin if no session cookie found
  const signinUrl = new URL('/signin', request.url);
  return NextResponse.redirect(signinUrl);
}

export default proxy;

export const config = {
  matcher: [
    '/ideas/:id+',
    '/my-ideas',
    '/my-interactions',
    '/add-ideas'
  ]
};
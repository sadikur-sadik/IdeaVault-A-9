import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session) {
    return NextResponse.next()
  }
  else {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

export const config = {
  matcher: ['/ideas/:path', '/my-ideas', '/my-interactions','/add-ideas']
}
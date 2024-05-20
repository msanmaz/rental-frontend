// middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const token = request.cookies.get('token');

  const verifyToken = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/user/verify-token', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Token verification failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return null;
    }
  };

  const pathname = request.nextUrl.pathname;
  let verifiedUser = null;

  if (token?.value) {
    verifiedUser = await verifyToken(token.value);
  }

  if (pathname.startsWith('/admin')) {
    if (!token?.value || !verifiedUser) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const response = NextResponse.next();
    console.log('x-user-info setting admin',JSON.stringify(verifiedUser))
    response.headers.set('x-user-info', JSON.stringify(verifiedUser));
    return response;
  }

  if (pathname === '/login' && verifiedUser) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  const response = NextResponse.next();
  if (verifiedUser) {
    console.log('x-user-info setting login',JSON.stringify(verifiedUser))
    response.headers.set('x-user-info', JSON.stringify(verifiedUser));
  }
  return response;
}

export const config = {
  matcher: ['/admin', '/login'],
};

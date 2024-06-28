import { NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/admin", "/admin/addhouse"];
const LOGIN_ROUTE = "/login";
const API_VERIFY_TOKEN_URL = "http://localhost:3000/api/auth/verify-token";

async function verifyToken(token) {
  try {
    const response = await fetch(API_VERIFY_TOKEN_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Token verification failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return null;
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  let verifiedUser = null;

  if (token) {
    verifiedUser = await verifyToken(token);
  }

  // Handle protected routes
  if (PROTECTED_ROUTES.some(route => pathname.startsWith(route))) {
    if (!verifiedUser) {
      console.log(`Unauthorized access attempt: ${pathname}`);
      return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
    }
    const response = NextResponse.next();
    response.headers.set("x-user-info", JSON.stringify(verifiedUser));
    return response;
  }

  // Handle login route
  if (pathname === LOGIN_ROUTE && verifiedUser) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // For all other routes
  const response = NextResponse.next();
  if (verifiedUser) {
    response.headers.set("x-user-info", JSON.stringify(verifiedUser));
  }
  return response;
}

export const config = {
  matcher: [...PROTECTED_ROUTES, LOGIN_ROUTE],
};
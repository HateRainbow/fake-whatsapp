import { decryptCookies } from "@/lib/cookies";
import { updateSession } from "@/lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/home"];

export async function middleware(
  req: NextRequest
): Promise<NextResponse | undefined> {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie ? await decryptCookies(cookie) : null;

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  } else {
    return await updateSession(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

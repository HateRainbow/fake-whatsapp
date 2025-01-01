// import { decryptCookies } from "@/lib/cookies";
// import { updateSession } from "@/lib/session";
// import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const protectedRoutes = ["/home"];

// export async function middleware(req: NextRequest): Promise<NextResponse> {
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoutes.includes(path);
//   const cookie = (await cookies()).get("session")?.value;
//   const session = cookie ? await decryptCookies(cookie) : null;

//   if (!session && isProtectedRoute) {
//     return NextResponse.redirect(new URL("/", req.nextUrl));
//   } else if (session && !isProtectedRoute) {
//     return NextResponse.redirect(new URL("/home", req.nextUrl));
//   }
//   return NextResponse.redirect(new URL("/", req.nextUrl));
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
export async function middleware(req: NextRequest) {}

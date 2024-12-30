import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decryptCookies, encryptCookies, SessionPayload } from "./cookies";
import { NextRequest, NextResponse } from "next/server";

export async function getSession(): Promise<SessionPayload> {
  // check if the user has authenticated
  const session = (await cookies()).get("session")?.value;
  if (!session) redirect("/");
  return await decryptCookies(session);
}

export async function createSession(phoneNumber: string): Promise<void> {
  // create a session for when user logs in
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h forward
  const session = await encryptCookies(phoneNumber);
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    expires: expiresAt,
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
}

export async function updateSession(
  request: NextRequest
): Promise<NextResponse> {
  {
    // This function only used for updating the session cookies in the middleware
    // returns a new response to the server
    const session = request.cookies.get("session")?.value!;

    if (!session) {
      return NextResponse.next();
    }

    const parsed = await decryptCookies(session);
    parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h forward
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encryptCookies(parsed),
      expires: parsed.expires,
      httpOnly: true,
    });

    return res;
  }
}

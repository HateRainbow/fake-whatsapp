import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt, encrypt } from "./cookies";
import { NextRequest, NextResponse } from "next/server";

export async function getSession() {
  // this function is used to check the cookies in app
  const session = (await cookies()).get("session")?.value;
  if (!session) redirect("/");
  return await decrypt(session);
}

export async function createSession(phoneNumber: string): Promise<void> {
  // create a session for when user logs in
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h forward
  const session = await encrypt(phoneNumber);
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    expires: expiresAt,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession(request: NextRequest) {
  // This function only used for updating the session cookies in the middleware
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h forward
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    expires: parsed.expires,
    httpOnly: true,
  });

  return res;
}

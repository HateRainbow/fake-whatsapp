import { jwtVerify, SignJWT } from "jose";
import env from "./env";
import { JWTPayload } from "ts-jose";

export interface SessionPayload extends JWTPayload {
  phoneNumber: string;
  expires: Date;
}

const SECRET_KEY = env.SECRET_KEY;
const key = new TextEncoder().encode(SECRET_KEY);

export async function encryptCookies(payload: any): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decryptCookies(input: string): Promise<SessionPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  return payload as SessionPayload;
}

import { registerNumber } from "@/lib/action";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phoneNumber } = req.body;
  const user = await registerNumber(phoneNumber);
}

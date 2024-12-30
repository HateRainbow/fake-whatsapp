import { registerNumber } from "@/lib/action";
import { createSession } from "@/lib/session";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { phoneNumber } = req.body;

  // create the user or find him
  await registerNumber(phoneNumber);

  // create the session for the user in the app
  await createSession(phoneNumber);

  return res.status(201).json({ message: "Number succesfully registrated" });
}

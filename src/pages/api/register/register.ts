import prisma from "@/lib/db";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result = await prisma.user.create({
      data: {
        phoneNumber: req.body.phoneNumber,
      },
    });
    return res.status(201).json(result);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

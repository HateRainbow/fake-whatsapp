"use server";
import prisma from "./db";
import { redirect } from "next/navigation";
export async function registerNumber(formData: FormData): Promise<void> {
  const phone = formData.get("phone") as string;
  try {
    await prisma.user.create({
      data: {
        phoneNumber: phone,
        usernames: phone,
      },
    });
    redirect("/home");
  } catch (error) {
    console.log("Couldn't register the user: ", error);
  }
}

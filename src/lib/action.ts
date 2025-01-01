"use server";
import { Contact } from "@prisma/client";
import prisma from "./db";
import { createSession } from "./session";
import { redirect } from "next/navigation";

export type loginData = {
  phone: string;
};

export async function loginUser(
  previousState: any,
  formData: FormData
): Promise<void> {
  const data = Object.fromEntries(formData.entries()) as loginData;

  if (!data.phone) {
    console.error("no formData");
    return;
  }

  try {
    const user = await prisma.user.findFirst({
      where: { phoneNumber: data.phone },
    });

    if (!user)
      await prisma.user.create({
        data: {
          phoneNumber: data.phone,
          usernames: data.phone,
        },
      });

    await createSession(data);
  } catch (error) {
    // error.stack is used because of some bug/glitch with prisma atm of dev
    // @ts-ignore ignore the error from error.stack
    console.log(error.stack);
  }

  redirect("/home");
}

export async function addContact(formData: FormData) {
  const searchContact = formData.get("searchParams") as string;
  let filteredUser;
}

export async function contactList() {
  // const friendList = await prisma.user.findMany({
  //   where: { phoneNumber:  },
  //   include: { contacts: true },
  // });
}

export async function contactListFiltered(formData: FormData) {}

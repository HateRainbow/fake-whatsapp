"use server";
import { cookies } from "next/headers";
import prisma from "./db";

export async function registerNumber(formData: FormData): Promise<void> {
  const phone = formData.get("phone") as string;
  try {
    const user = await prisma.user.findFirst({
      where: { phoneNumber: phone },
    });

    if (!user) {
      const { phoneNumber } = await prisma.user.create({
        data: {
          phoneNumber: phone,
          usernames: phone,
        },
      });
    }
  } catch (error) {
    // error.stack is used because of some bug/glitch with prisma atm of dev
    // @ts-ignore
    console.log("Couldn't register the user: ", error.stack);
  }
}

export async function addContact(formData: FormData) {
  const contactPhoneNumber = formData.get("phone") as string;
}

export async function contactList() {
  // const friendList = await prisma.user.findMany({
  //   where: { phoneNumber:  },
  //   include: { contacts: true },
  // });
}

export async function contactListFiltered() {}

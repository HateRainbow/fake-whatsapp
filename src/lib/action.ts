"use server";
import { Contact, User } from "@prisma/client";
import prisma from "./db";
import { createSession, getSession } from "./session";
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

export async function addToContactList(formData: FormData): Promise<void> {
  const contact = formData.get("searchParams") as string;
  const contactExist = await prisma.user.findFirst({
    where: { phoneNumber: contact },
  });

  const userSessionNumber = (await getSession()).phoneNumber;

  if (!contactExist?.phoneNumber) {
    return;
  }

  await prisma.user.update({
    where: { phoneNumber: userSessionNumber },
    data: {
      contacts: {
        create: {
          contactName: contactExist.usernames || contactExist.phoneNumber,
          phoneNumber: contactExist.phoneNumber,
        },
      },
    },
  });
}

export async function contactList(): Promise<User[]> {
  const session = await getSession();
  const sessionNumber = session.phoneNumber;

  return await prisma.user.findMany({
    where: { phoneNumber: sessionNumber },
    include: { contacts: true },
  });
}

export async function contactListFiltered(formData: FormData) {}

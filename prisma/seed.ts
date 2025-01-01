import { PrismaClient } from "@prisma/client";
import { users } from "./user";

const prisma = new PrismaClient();

const createUser = async () => {
  for (let user of users) {
    await prisma.user.create({
      data: user,
    });
  }
};

createUser()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

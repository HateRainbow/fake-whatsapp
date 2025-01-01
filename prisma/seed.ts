import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const users = [
  {
    usernames: "John Doe",
    phoneNumber: "+1-555-0123",
  },
  {
    usernames: "Mary Smith",
    phoneNumber: "+44-7911-123456",
  },
  {
    usernames: "Alex Johnson",
    phoneNumber: "+61-412-345678",
  },
  {
    usernames: "Susie Wilson",
    phoneNumber: "+33-612-345678",
  },
  {
    usernames: "Mike Brown",
    phoneNumber: "+49-170-1234567",
  },
  {
    usernames: "Emily James",
    phoneNumber: "+91-9876543210",
  },
  {
    usernames: "David Taylor",
    phoneNumber: "+81-90-1234-5678",
  },
  {
    usernames: "Karen Lee",
    phoneNumber: "+55-21-91234-5678",
  },
  {
    usernames: "Chris Martin",
    phoneNumber: "+34-612-345678",
  },
  {
    usernames: "Lisa Jones",
    phoneNumber: "+27-82-123-4567",
  },
];

const createUser = async () => {
  try {
    await prisma.user.createMany({
      data: users,
    });
    console.log("Users created successfully");
  } catch (error) {
    console.error("Error creating users: ", error);
  }
};

createUser()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

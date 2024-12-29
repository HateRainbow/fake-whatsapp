import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Initialize Prisma Client
const prisma = new PrismaClient().$extends(withAccelerate());
const apiKey: string = process.env.PULSE_API_KEY ?? "";

// Check if the PULSE_API_KEY is set in the environment variables
if (!apiKey || apiKey === "") {
  console.error(
    `Please set the \`PULSE_API_KEY\` environment variable in the \`.env\` file.`
  );
  process.exit(1);
}

export default prisma;

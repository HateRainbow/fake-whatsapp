import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const apiKey: string = process.env.PULSE_API_KEY ?? "";

if (!apiKey || apiKey === "") {
  console.error(
    `Please set the \`PULSE_API_KEY\` environment variable in the \`.env\` file.`
  );
  process.exit(1);
}

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;

import { z } from "zod";

const envSchema = z.object({
  SECRET_KEY: z.string().nonempty(),
});

const env = envSchema.parse(process.env);

export default env;

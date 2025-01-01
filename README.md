# Known Issue with Prisma and Next.js in SSR Context

## Warning

### **Problem Overview**

There is a known issue where Prisma queries inside the `try` block in the `registerNumber` function (or similar functions) execute correctly, but the flow unexpectedly falls into the `catch` block. This behavior can result in unnecessary error handling or incorrect state handling, even when the Prisma operation succeeds.

For example, in the `registerNumber` function within `src/lib/action.ts`, the logic looks like this:

```typescript
export async function registerNumber(formData: FormData): Promise<void> {
  const phone = formData.get("phone") as string;
  try {
    // Prisma query to create a new user
    await prisma.user.create({
      data: {
        phoneNumber: phone,
        usernames: phone,
      },
    });
  } catch (error) {
    // Log the error stack (due to a known Prisma bug/glitch)
    console.log("Couldn't register the user: ", error.stack);
    // rest of the code logic in the try statement
    redirect("/home");
  }
}
```

### seed

to seed the database you can simply run _npx prisma db seed_ to seed the dummy database

## About the project

This project is a fake whatsapp clone using prisma and a prisma, prisma postgress using next 15 with react 18 to be able to use a packaged called react-phone-input-2

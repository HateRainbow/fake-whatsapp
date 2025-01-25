"use client";
import { useState, useEffect, useActionState } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/bootstrap.css";
import { loginUser } from "@/lib/action";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

export default function Register() {
  const [isClient, setIsClient] = useState(false);
  const [state, formAction] = useActionState(loginUser, null);

  useEffect(() => {
    setIsClient(true); // to make sure that PhoneInput runs in the client
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-primary-dark">
      <form
        className="flex flex-col bg-white p-6 rounded shadow-md w-full max-w-sm"
        action={formAction}
        method="POST"
      >
        <h1 className="text-xl font-bold mb-4 text-center">WhatsApp Login</h1>
        {isClient && (
          <PhoneInput
            containerClass="phone-input"
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            isValid={(value, country) => {
              if (value.match(/12345/)) {
                return "Invalid value: " + value + ", " + country;
              } else if (value.match(/1234/)) {
                return false;
              } else {
                return true;
              }
            }}
          />
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-2 w-[90%] text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 pl-2 ml-4"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { useFormState } from "react-dom";
import { testFunc } from "@/lib/action";
export default function Register() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form
        className="flex flex-col bg-white p-6 rounded shadow-md w-full max-w-sm"
        action={testFunc}
      >
        <h1 className="text-xl font-bold mb-4 text-center">WhatsApp Login</h1>

        <PhoneInput
          containerClass="phone-input"
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
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

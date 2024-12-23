"use client";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/router";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

interface RegisterButtonProps {
  prop: (event: React.SyntheticEvent) => void;
}

export default function Register() {
  const [phone, setPhone] = useState<string>("");
  const { replace } = useRouter(); // Move useRouter to the top level

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data: User = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ phoneNumer: phone }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      console.log("rerendering");
      replace(`/home/${data.userID}`);
    } catch (error) {
      console.error("data wasn't fetched", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form
        className="flex flex-col bg-white p-6 rounded shadow-md w-full max-w-sm"
        action=""
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

        <RegisterButton prop={handleClick} />
      </form>
    </div>
  );
}

function RegisterButton({ prop }: RegisterButtonProps) {
  return (
    <button
      onClick={prop}
      type="submit"
      className="mt-4 px-4 py-2 w-[90%] text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 pl-2 ml-4"
    >
      Log In
    </button>
  );
}

"use client";

import { correctUser } from "@/app/home/page";
import { User } from "@prisma/client";
import { CircleUserRound } from "lucide-react";
import React from "react";

type ContactListProp = {
  user: correctUser[];
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export default function ContactList({ user, setUser }: ContactListProp) {
  return (
    <div>
      {user.map((user) => (
        <ul
          key={user.phoneNumber}
          className="flex items-start flex-col overflow-y-scroll cursor-pointer pt-2 w-[100%] text-[#e9edef]"
        >
          <li
            className="w-[100%] hover:bg-slate-500"
            onClick={() => setUser(user.usernames || user.phoneNumber)}
          >
            <p className="flex items-center gap-x-4 p-3 text-xl text-center align-middle border w-[100%] min-h-8 h-[100%] border-secondary-dark">
              <CircleUserRound className="bg-[#6A7175] rounded-[50%] w-8 h-8" />
              {user.usernames || user.phoneNumber}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
}

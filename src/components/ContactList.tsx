"use client";
import { CircleUserRound } from "lucide-react";
// hover #202C33
// clicked #111B21

export default function ContactList() {
  return (
    <ul className="flex items-start flex-col overflow-y-scroll cursor-pointer pt-2 w-[100%]">
      <li className="w-[100%] hover:bg-[#202C33]">
        <p className="flex items-center gap-3 text-xl text-center align-middle border w-[100%] min-h-8 h-[100%] border-secondary-dark">
          <CircleUserRound className="bg-[#6A7175] rounded-[50%] w-8 h-8" />
          Pizza mamma mai
        </p>
      </li>
    </ul>
  );
}

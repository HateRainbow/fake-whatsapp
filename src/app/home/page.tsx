"use client";
import ChatWindow from "@/components/ChatWindow";
import SearchBar from "@/ui/SearchBar";
import clsx from "clsx";
import {
  CircleUserRound,
  EllipsisVertical,
  MessageSquarePlus,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMessagePlusIconClicked, setIsMessagePlusIconClicked] =
    useState<boolean>(false);

  return (
    <div className="flex h-screen flex-row w-full">
      <div
        className={clsx({
          "w-[30%] border-r-0 overflow-y-auto pl-0 min-w-min motion-preset-slide-right motion-duration-1000":
            isMessagePlusIconClicked,
          invisible: !isMessagePlusIconClicked,
        })}
      >
        <SearchBar />
      </div>
      <nav className="w-[30%] invisible border-r-0 overflow-y-auto pl-0 min-w-min  absolute">
        <header>
          <ul className="flex justify-between items-center w-full p-2">
            <li>
              <h1 className="text-xl font-semibold">Chats</h1>
            </li>
            <div className="flex gap-4 text-gray-600">
              <li>
                <button className="p-2">
                  <MessageSquarePlus
                    onClick={() => setIsMessagePlusIconClicked(true)}
                  />
                </button>
              </li>
              <li>
                <button className="p-2">
                  <EllipsisVertical />
                </button>
              </li>
            </div>
          </ul>
        </header>
        <SearchBar />
        <div className="pl-1 p-1">
          <main>
            <ul className="flex items-start flex-col overflow-y-scroll cursor-pointer pt-2 w-[100%]">
              <li className="w-[100%] hover:bg-[#202C33]">
                <p className="flex items-center gap-3 text-xl text-center align-middle border w-[100%] min-h-8 h-[100%] border-secondary-dark">
                  <CircleUserRound className="bg-[#6A7175] rounded-[50%] w-8 h-8" />
                  Pizza mamma mia
                </p>
              </li>
            </ul>
          </main>
        </div>
      </nav>
      <section className="flex-grow overflow-y-auto overflow-x-hidden w-[70%] h-screen bg-black">
        <ChatWindow />
      </section>
    </div>
  );
}

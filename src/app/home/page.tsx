"use client";
import ChatWindow from "@/components/ChatWindow";
import ContactList from "@/components/ContactList";
import NewChatPanel from "@/components/NewChatPanel";
import SearchBar from "@/ui/SearchBar";
import { User } from "@prisma/client";
import {
  ArrowLeft,
  CircleUserRound,
  EllipsisVertical,
  MessageSquarePlus,
} from "lucide-react";
import { useState } from "react";

export type correctUser = {
  phoneNumber: string;
  usernames?: string;
};
const users: correctUser[] = [
  {
    phoneNumber: "+14901511275",
    usernames: undefined,
  },
  {
    phoneNumber: "+13793606472",
    usernames: "user5523",
  },
];
export default function Home() {
  const [isNewChatPanelOpened, setIsNewChatPanelOpened] = useState(false);
  const [user, setUser] = useState<string>();

  return (
    <div className="flex h-screen flex-row w-full ">
      <nav className="w-[30%] flex- border-r-0 relative overflow-y-auto pl-0 min-w-min p-2">
        <ArrowLeft className="py-2 text-xl w-10 h-10 cursor-pointer" />
        <SearchBar />
        <div>
          <ul className="flex items-start flex-col overflow-y-scroll cursor-pointer pt-2 w-[100%]">
            <li className="w-[100%] py-3 hover:bg-[#202C33] leading-30">
              <div className="flex items-center gap-3 text-xl text-center align-middle  w-[100%] min-h-8 h-full border-secondary-dark">
                <CircleUserRound className="bg-[#6A7175] rounded-[50%] w-8 h-8" />
                Pizza mamma mia
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="w-[30%] h-screen border-r-0 overflow-y-auto pl-0 min-w-min absolute bg-primary-dark">
        <header>
          <ul className="flex justify-between items-center w-full p-2">
            <li>
              <h1 className="text-xl font-semibold">Chats</h1>
            </li>
            <div className="flex gap-4 text-gray-600">
              <li>
                <button
                  className="p-2"
                  onClick={() => {
                    setIsNewChatPanelOpened(!isNewChatPanelOpened);
                  }}
                >
                  <MessageSquarePlus />
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
          <div>
            <ContactList user={users} setUser={setUser} />
          </div>
        </div>
        <NewChatPanel
          isOpened={isNewChatPanelOpened}
          setIsOpened={setIsNewChatPanelOpened}
        />
      </nav>

      <section className="flex-grow overflow-y-auto overflow-x-hidden w-[70%] h-screen bg-black">
        <ChatWindow user={user} />
      </section>
    </div>
  );
}

import { EllipsisVertical, MessageSquarePlus } from "lucide-react";

export default function Header() {
  return (
    <header>
      <ul className="flex flex-row w-[100%] gap-[8rem] p-2 text-lg">
        <li>
          <h1>Chats</h1>
        </li>
        <li>
          <button>
            <MessageSquarePlus />
          </button>
        </li>
        <li>
          <button>
            <EllipsisVertical />
          </button>
        </li>
      </ul>
    </header>
  );
}

import { EllipsisVertical, MessageSquarePlus } from "lucide-react";

export default function Header() {
  return (
    <header>
      <ul className="flex justify-between items-center w-full p-2">
        <li>
          <h1 className="text-xl font-semibold">Chats</h1>
        </li>
        <div className="flex gap-4 text-gray-600">
          <li>
            <button className="p-2">
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
  );
}

import { Search, EllipsisVertical } from "lucide-react";

type ChatWindowHeaderProp = {
  username?: string;
};

export default function ChatWindowHeader({ username }: ChatWindowHeaderProp) {
  return (
    <div className="flex flex-row items-center justify-between w-full h-[10vh] p-2 bg-secondary-dark ">
      <h1 className="text-white text-3xl p-1">{username}</h1>
      <div className="flex flex-row gap-3 justify-evenly">
        <Search className="text-3xl text-gray-400" />
        <EllipsisVertical className="text-3xl text-gray-400" />
      </div>
    </div>
  );
}

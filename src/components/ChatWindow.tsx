import ChatWindowHeader from "./ChatWindowHeader";

type ChatWindowProps = {
  selectedUser?: string;
};

const socket = io("http://localhost:3000");

export default function ChatWindow({ selectedUser }: ChatWindowProps) {
  return (
    <div className="flex w-[100%] z-[-1]">
      <ChatWindowHeader username={selectedUser} />
    </div>
  );
}

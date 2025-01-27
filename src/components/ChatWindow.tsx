import ChatWindowHeader from "./ChatWindowHeader";

export default function ChatWindow({ user }: any) {
  return (
    <div className="flex w-[100%] z-[-1]">
      <ChatWindowHeader username={user} />
    </div>
  );
}

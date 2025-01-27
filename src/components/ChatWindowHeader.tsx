type ChatWindowHeaderProp = {
  username: string;
};
export default function ChatWindowHeader({ username }: ChatWindowHeaderProp) {
  return (
    <div className="flex-row items-center justify-center w-[100%] h-[10vh] bg-secondary-dark">
      <h1 className="text-white text-3xl p-1">{username}</h1>
    </div>
  );
}

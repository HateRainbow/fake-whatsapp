import SearchBar from "@/ui/SearchBar";
import clsx from "clsx";
import { ArrowLeftIcon } from "lucide-react";

type NewChatPanelProps = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewChatPanel({
  isOpened,
  setIsOpened,
}: NewChatPanelProps) {
  return (
    <div
      className={clsx(
        "absolute bg-white inset-0 -translate-x-full transition-transform ",
        isOpened && "translate-x-0"
      )}
    >
      <header className="flex flex-row items-center p-[3px]">
        <ArrowLeftIcon
          className="cursor-pointer"
          onClick={() => setIsOpened(false)}
        />
        <SearchBar />
      </header>
    </div>
  );
}

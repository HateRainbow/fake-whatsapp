import clsx from "clsx";
import { ArrowLeftIcon, Search } from "lucide-react";
import { useRouter } from "next/navigation";
type AddNewContactPanelProps = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddNewContactPanel({
  isOpened,
  setIsOpened,
}: AddNewContactPanelProps) {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "absolute bg-primary-dark inset-0 -translate-x-full transition-transform ",
        isOpened && "translate-x-0"
      )}
    >
      <header className="flex flex-col justify-center p-[3px]">
        <div className="flex flex-row py-4">
          <ArrowLeftIcon
            className="cursor-pointer text-gray-400"
            onClick={() => setIsOpened(false)}
          />
          <h2 className="text-gray-400">Add New Contact</h2>
        </div>
        <div className="justify-center w-full">
          <form
            onSubmit={() => router.refresh()}
            action=""
            className="flex items-center p-1 w-full text-gray-600"
          >
            <button type="submit" className="absolute">
              <Search className="text-sm pl-1" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="bg-secondary-dark rounded-lg pl-8 w-[95%] h-9 border-0 outline-none"
            />
          </form>
        </div>
      </header>
    </div>
  );
}

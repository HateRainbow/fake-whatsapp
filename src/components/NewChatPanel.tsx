import clsx from "clsx";

type NewChatPanelProps = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewChatPanel({ isOpened, setIsOpened }: NewChatPanelProps) {
  return (
    <div
      className={clsx("absolute bg-white inset-0 -translate-x-full transition-transform", isOpened && "translate-x-0")}
    >
      <header>
        <button className="text-2xl" onClick={() => setIsOpened(!isOpened)}>
          &larr;
        </button>
      </header>

      <p> Panelinnehåll här </p>
    </div>
  );
}

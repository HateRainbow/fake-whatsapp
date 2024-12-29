import { Search } from "lucide-react";

export default function ContactSearchBar() {
  return (
    <form action="" className="flex items-center">
      <button type="submit" className="absolute ">
        <Search className="text-sm" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="bg-secondary-dark rounded-lg pl-8 w-[95%] h-9"
      />
    </form>
  );
}

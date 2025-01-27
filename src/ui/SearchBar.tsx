import { Search } from "lucide-react";
import { useActionState } from "react";

const initialState = {
  searchResult: "",
};

type SearchBarParamProps = {
  searchAction: (FormData: FormData) => any;
};
// { searchAction }: SearchBarParamProps
export default function SearchBar() {
  return (
    <form action="" className="flex items-center p-1 text-gray-600">
      <button type="submit" className="absolute">
        <Search className="text-sm pl-1" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="bg-secondary-dark rounded-lg pl-8 w-[95%] h-9 border-none outline-none"
      />
    </form>
  );
}

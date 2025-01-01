import Image from "next/image";

export default function ContactList() {
  return (
    <ul className="flex items-start flex-col overflow-y-scroll cursor-pointer pt-2">
      <li className="w-[100%]">
        <p className="text-xl border w-[100%]">Isak byström</p>
      </li>
    </ul>
  );
}

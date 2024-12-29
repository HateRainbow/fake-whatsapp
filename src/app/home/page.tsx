import ChatWindow from "@/components/ChatWindow";
import ContactList from "@/components/ContactList";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="flex h-screen flex-row gap-5 w-full">
      <nav className="w-[30%] border-r border-gray-300 overflow-y-auto">
        <Header />
        <ContactList />
      </nav>
      <section className="flex-grow overflow-y-auto overflow-x-hidden w-[70%]">
        <ChatWindow />
      </section>
    </main>
  );
}

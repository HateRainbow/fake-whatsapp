import ChatWindow from "@/components/ChatWindow";
import ContactList from "@/components/ContactList";
import ContactSearchBar from "@/components/ContactSearchBar";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="flex h-screen flex-row w-full">
      <nav className="w-[30%] border-r-0 overflow-y-auto pl-0 min-w-min">
        <Header />
        <div className="pl-1 p-1">
          <ContactSearchBar />
          <main>
            <ContactList />
          </main>
        </div>
      </nav>
      <section className="flex-grow overflow-y-auto overflow-x-hidden w-[70%] h-screen bg-red-700">
        <ChatWindow />
      </section>
    </div>
  );
}

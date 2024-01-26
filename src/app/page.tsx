import Cards from "./components/Cards/Cards";
import { Profile } from "./components/Profile";
import QR from "./components/QR";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-start lg:items-start lg:justify-center px-6 lg:px-10 lg:py-6 flex-col lg:flex-row gap-8">
        <div className="w-96">
          <Profile />
        </div>
        <Cards className="w-full lg:w-[calc(85%-24rem)]" />
      </main>
      <QR className="fixed bottom-0 right-0 z-10 p-4" />
    </>
  );
}

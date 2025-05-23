import DecoButton from "../components/DecoButton";

export default function NotFound() {
  return (
    <div className="fixed top-0 -z-10 flex h-full w-screen flex-col items-center justify-center">
      <div className="notfound-container-shadow font-Noto flex h-2/3 w-2/3 flex-col items-center justify-center gap-12 rounded-2xl bg-white px-4 py-8 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="text-9xl font-bold">404</div>
          <div className="text-2xl">Not Found</div>
        </div>

        <DecoButton mode="link" href="/" className="text-2xl">
          ホームに戻る
        </DecoButton>
      </div>
    </div>
  );
}

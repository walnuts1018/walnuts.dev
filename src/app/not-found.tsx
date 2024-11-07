import DecoButton from "../components/DecoButton";

export default function NotFound() {
  return (
    <div className="top-0 -z-10 fixed h-full w-screen flex flex-col items-center justify-center">
      <div className="notfound-container-shadow rounded-2xl w-2/3 h-2/3 justify-center gap-12 flex flex-col items-center font-Noto bg-white px-4 py-8 shadow-xl">
        <div className="items-center flex flex-col">
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

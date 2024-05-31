import ProfileImage from "../components/ProfileImage";

export default function About() {
  return (
    <main className="flex min-h-screen items-center justify-start px-6 lg:px-10 lg:py-6 flex-col gap-8 w-full">
      <h1 className="text-4xl font-bold font-Nunito">About</h1>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className=" h-48 w-48 sm:h-60 sm:w-60">
          <ProfileImage />
        </div>
        <div>
          <p className="w-full font-Noto text-2xl">俵 遼太 / Ryota Tawara</p>
          <p className="w-full font-Noto text-xl"> </p>
        </div>
      </div>
    </main>
  );
}
1;

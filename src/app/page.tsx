import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-950 flex flex-col h-screen justify-evenly items-center">
      <div className="text-white flex text-5xl mt-[72px] uppercase ">Nequistih</div>
      <Link href={'/profile'} className="flex justify-center items-center bg-orange-300  text-2xl cursor-pointer border border-gray-50 p-3 px-14 text-slate-950">Profiles</Link>

    </main>
  );
}

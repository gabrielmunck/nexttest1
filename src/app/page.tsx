"use client"

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import nextSvg from '../../public/next.svg'



export default function Home() {


  return (
    <main >
      <Header name={'Gabriel Munck'} age={25} isHuman={true}>
        <p>Nesquistih</p>
      </Header>
      <div className="bg-slate-950 flex flex-col h-screen justify-evenly items-center">
        <div className="text-white flex text-5xl mt-[72px] uppercase ">Nequistih</div>
        <Link href={'/profile'} className="flex justify-center items-center bg-orange-300  text-2xl cursor-pointer border border-gray-50 p-3 px-14 text-slate-950">Profiles</Link>
        <div className="w-[150px]">
          <Image src={nextSvg} alt="logo da next.js"></Image>
        </div>
      </div>
    </main>
  );
}

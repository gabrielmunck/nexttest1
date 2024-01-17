"use client"
import Link from "next/link"



export default function Profile() {


    return(
        <div className="bg-slate-950 flex flex-col h-screen items-center justify-evenly">
            <div className="flex justify-center items-center ">
                <h1 className="flex text-5xl text-white font-bold mr-10">My list of profiles:</h1>
                <ul>
                    <Link href="/profile/father"  className="flex text-5xl text-orange-300 mb-8 cursor-pointer uppercase underline" >Father</Link>
                    <Link href="/profile/mom"  className="flex text-5xl text-orange-300 mb-8 cursor-pointer uppercase underline" >Mom</Link>
                    <Link href="/profile/kids"  className="flex text-5xl text-orange-300 mb-8 cursor-pointer uppercase underline" >Kids</Link>
                    
                </ul>
            </div>

            <Link href={'/'} className="flex justify-end  text-2xl cursor-pointer border border-gray-50 p-3 px-14 text-white">Home</Link>


        </div>
    )
}
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProfileID() {
  const params = useParams();

  return (
    <div className="bg-slate-950 flex flex-col items-center h-screen ">
      <h1 className="flex text-5xl text-white mt-24 mb-60 uppercase font-bold underline">
        {params.id} profile page
      </h1>
      <Link
        href={`${params.id}/post`}
        className="flex text-5xl cursor-pointer border border-gray-50 p-6 text-white uppercase mb-60"
      >
        See my posts
      </Link>
      <Link
        href="/profile"
        className="flex text-5xl cursor-pointer border border-gray-50 p-6 text-red-600"
      >
        Back to menu
      </Link>
    </div>
  );
}

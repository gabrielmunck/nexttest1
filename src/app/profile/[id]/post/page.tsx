//funcao que carrega os parametros Id da pagina "acima"
"use client" 

import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProfileIDPost() {

    const params = useParams()

    return(
        <div className="bg-slate-950 flex flex-col h-screen ">
            <h1 className="flex justify-center items-center text-5xl text-white mt-10 font-bold underline mb-10">{params.id}'s posts:</h1>
            <ul className="flex flex-col items-start ml-16 lg:ml-96 text-white text-3xl">
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>
                <li className="mb-5">Post...</li>

            </ul>

            <Link href={'/profile/'+params.id} className="flex flex-row-reverse text-5xl cursor-pointer border border-gray-50 p-6 text-white uppercase lg:mt-36">Back to profile</Link>

        </div>
    )

}
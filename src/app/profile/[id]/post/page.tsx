//funcao que carrega os parametros Id da pagina "acima"
"use client" 
import { useParams } from "next/navigation"

export default function ProfileIDPost() {

    const params = useParams()
    console.log(params.id)

    return(
        <div className="bg-slate-950 flex  justify-center items-center h-screen text-5xl text-white">My Posts profile page</div>
    )

}
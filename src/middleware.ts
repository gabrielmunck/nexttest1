import { NextResponse} from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = true

export function middleware(request: NextRequest) {


    if (isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
}
    


export const config = {
    matcher: ['/profile', '/profile/mom'] // Lista de urls que nao podem ser acessada caso nao esteja logado
}

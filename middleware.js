import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(request) {
    const session = await getToken({ req: request, secret: process.env.SECRET });
    
    if (session?.role === 'user') {
        if (request.nextUrl.pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/', request.url))
        }

    } else if(session?.role === 'admin') {
        return NextResponse.rewrite(new URL('/admin', request.url))
    } else {
        if (!session) {
            if (request.nextUrl.pathname.startsWith('/dashboard')) {
                return NextResponse.redirect(new URL('/login', request.url))
            }
            return NextResponse.redirect(new URL('/dashboard', request.url))
            
        }
    }
}


export const config = {
    matcher: [
        '/admin',
        '/dashboard'
    ]
}
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
    const session = await getToken({ req: request, secret: process.env.SECRET });

    if (!session) {
        if (request.nextUrl.pathname.startsWith('/dashboard')) {
            return NextResponse.rewrite(new URL('/login', request.url))
        }
    } else {
        return NextResponse.rewrite(new URL('/dashboard', request.url))
    }

    if (session?.User?.role !== 'admin') {
        if (request.nextUrl.pathname.startsWith('/admin')) {
            return NextResponse.rewrite(new URL('/dashboard', request.url))
        }
    } else {
        return NextResponse.rewrite(new URL('/admin', request.url))
    }
}


export const config = {
    matcher: [
        '/admin',
        '/dashboard',
    ]
}

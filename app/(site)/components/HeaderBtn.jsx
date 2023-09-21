
import {signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function HeaderBtn() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <Link href="/dashboard">
                    <button className='h-10 text-blue rounded-xl px-2 '>Dashboard</button>
                </Link>
                <Link href="/cart">
                    <button className='h-10 text-blue rounded-xl px-2 '>Cart</button>
                </Link>
                    <button onClick={() => signOut()} className='h-10 text-blue rounded-xl px-2 '>Sign Out</button>
            </>
        )
    }
    return (
        <>
            <Link href="/login">
                <button className='h-10 text-blue rounded-xl px-2 '>Login</button>
            </Link>
            <Link href='/register'>
                <button className='h-10 text-blue rounded-xl px-2 '>Register</button>
            </Link>
        </>
    )
}

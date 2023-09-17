'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

const dashboard = () => {
    const { data:session } = useSession()
  return (
    <div>
      <h1 className='text-xl text-blue-500 font-bold mx-auto text'>Dashboard</h1>
      <Link href='/'> Home </Link>
      
        <div className='flex items-center justify-center'>
          <p>Hi {session?.user?.name}</p>
          <button onClick={() => signOut()} className='bg-red-500 text-white rounded-xl p-2 m-5 border'>Sign Out</button>
          
        </div>
        
    </div>
  )
}

export default dashboard
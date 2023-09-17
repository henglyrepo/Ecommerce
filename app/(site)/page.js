import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route.jsx'
import User from './components/user'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <section> 
      <div className='max-w-7xl'>
        <div className='flex py-5 items-center justify-center'>
            <input type="text" className='h-10 rounded-2xl pr-80 p-2 border ' placeholder='search products'/>
            <button className='h-10 mx-2 bg-blue-500 text-white rounded-2xl px-6 border'>Search</button>
        </div>
        <div className='flex-1 items-center justify-center'> 
            <h1 className='text-xl text-blue-500 font-bold mx-auto text'>Home</h1>
            <h1>Server Side Rendered</h1>
            <pre>{JSON.stringify(session)}</pre>
            <h1>Client Side Rendered</h1>
            <User />
        </div>
      </div> 


    </section>
  )
}

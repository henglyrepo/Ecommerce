"use client"

// import { getServerSession } from 'next-auth'
// import client from '../libs/prismadb'
// import { authOptions } from '../api/auth/[...nextauth]/route.jsx'
// import User from './components/user'
import Products from './components/Products'
import SearchProducts from './components/SearchProducts.jsx'
import Category from './components/Categories.jsx'
import { useState, useEffect } from 'react'


export default function Home() {
  // const session = await getServerSession(authOptions)
  const [products, setProducts] = useState([])

  useEffect (() => {
    const getProducts = async () => {
      const res = await fetch('api/products')
      const products = await res.json()
      setProducts(products)
    }
    getProducts()
  }, [])
  
  return (
    <section> 
      <div className='max-w-screen'>
        <div className='flex py-5 items-center justify-center'>
            <SearchProducts getSearchResults={(results) => setProducts(results)} />
        </div>
        <div className='flex-1 items-center justify-center'> 
            <Category />
            {/* <h1>Server Side Rendered</h1>
            <pre>{JSON.stringify(session)}</pre>
            <h1>Client Side Rendered</h1>
            <User /> */}
            <Products products={products} />
        </div>
      </div> 


    </section>
  )
}

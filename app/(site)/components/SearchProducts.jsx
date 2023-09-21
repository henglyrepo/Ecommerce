"use client"

import { useState } from 'react'


export default function SearchProducts({ getSearchResults }) {
    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/products/search?query=${query}`)
        const product = await response.json()
        getSearchResults(product)
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <>
                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className='h-10 rounded-2xl pr-80 p-2 border ' placeholder='search products...'/>
                <button type='submit' className='h-10 mx-2 bg-blue-500 text-white rounded-2xl px-6 border'>Search</button>
                </>
            </form>
        </div>
    </div>
  )
}

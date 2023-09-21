"use client"

import { useState, useEffect } from "react";

export default function Category() {
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch('https://fakestoreapi.com/products/categories')
            const categories = await res.json();
            setCategories(categories);
        }
        getCategories();
    }, []);

  return (
    <div>
        <h1 className='text-xl text-blue-500 font-bold mx-auto text'>Category</h1> 
        <div className='flex gap-5 items-center my-10  bg-white rounded-lg'>
            <div  className="flex-none w-50 h-70 shadow p-5 rounded-2xl">
                {categories.map((category) => (
                    <h1 key={category} className="py-3 font-bold">{category}</h1>
                ))}
            </div>
            <div className="flex-none h-70 shadow  rounded-2xl p-5 w-120 ...">
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
            </div>
            <div className="flex shadow  rounded-2xl p-5 w-full ...">
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
                <h1>some poster some poster some poster some poster </h1>
            </div>
        </div>
    </div>
  )
}

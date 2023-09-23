"use client"

import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateProduct() {

    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false)
    const [input, setInput] = useState({})

      
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('/api/products', {
          method: 'POST',
          body: JSON.stringify(input),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(res);
        if (!res.ok) throw new Error('Failed to create product');
        setInput({});
        setModalOpen(false);
        router.refresh();
      } catch (err) {
        console.log(err);
      }
    };


    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "price") {
          const floatValue = parseFloat(value); // Convert price to float
          value = floatValue;
        }
        
        setInput((prevState) => ({...prevState, [name]: value}));
    }

    return (
        <div className=''>
            <button onClick={() => setModalOpen(true)} className="bg-blue-600 px-5 py-2 text-white rounded-lg">create</button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form className="w-full" onSubmit={handleSubmit}>
                    <h1 className="text-2xl pb-3">Add New Product</h1>
                    <input name="title" value={input.title || ""} onChange={handleChange} type="text" placeholder="Title" className="w-full p-2 my-2"/>
                    <input name="category" value={input.category || ""} onChange={handleChange} type="text" placeholder="Category" className="w-full p-2 my-2"/>
                    <input name="price" value={input.price || ""} onChange={handleChange} type="number" placeholder="Price" className="w-full p-2 my-2"/>
                    <input name="description" value={input.description || ""} onChange={handleChange} type="text" placeholder="Description" className="w-full p-2 my-2"/>
                    <button type="submit" className="bg-blue-600 px-5 py-2 text-white rounded-lg">Submit</button>
                </form>
            </Modal>
        </div>
    )
};


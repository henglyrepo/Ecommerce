"use client"


import { useEffect, useState } from "react";
import Image from "next/image";
import CreateProduct from "./CreateProduct";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

    // Calculate the index range for products to display
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


  return (
    <div>
      <div className="flex m-5 justify-between">
        <h1>Products</h1>
        <CreateProduct />
      </div>

        <table>
            <thead className=" bg-gray-50">
                <tr>
                    <th className="px-10">ID</th>
                    <th className="px-10">Title</th>
                    <th className="px-10">Image</th>
                    <th className="px-10">Price</th>
                    <th className="px-10">Category</th>
                    <th className="px-10">Description</th>
                </tr>
            </thead>
            <tbody>
            {currentProducts.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td className="truncate">{product.title.substring(0, 15)}</td>
                    <Image className="p-2 ml-10"  src={product.image} alt={product.title} width={45} height={100} priority />
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td className="truncate">{product.description.substring(0, 20)}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="m-5">
            <div>
            {/* Pagination */}
            {products.length > productsPerPage && (
                <div>
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
                    <button
                    key={index}
                    className={currentPage === index + 1 ? 'bg-blue-500 text-white p-3' : 'text-gray-500 p-3'}
                    onClick={() => handlePageChange(index + 1)}
                    >
                    {index + 1}
                    </button>
                ))}
                </div>
            )}
            </div>
        </div>
            
    </div>
  );
}

import Image from "next/image";

export default function Products({products}) {

  return (
    <div>
        <>
        <div className="my-5 text-xl font-bold text-blue-500">Products Listing</div>
        <div className="my-5">
            <div className="grid grid-cols-5">
                {products.map((product) => (
                    <a key={product.id} href={`/products/${product.id}`} className="m-2 border rounded-xl p-5">

                        <div className="w-full h-48 object-cover mx-auto">
                            <Image className="item-center"  src={product.image} alt={product.title} width={100} height={100} priority />
                        </div>
                        <div className="font-bold text-blue-500">${product.price} </div>
                        <div className="text-gray-500">{product.category}</div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-gray-500 truncate ">{product.description}...</div>
                
                    </a>
                ))}
            </div>
        </div>
        </>
    </div>
  )
}

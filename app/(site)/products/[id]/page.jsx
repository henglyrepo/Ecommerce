import getProduct from "../../../libs/productPage/getProduct.js";


export default async function productPage({ params: { id } }) {
  const product = await getProduct(id);

  return (
    <div key={product.id}  className="max-w-7xl mx-auto px-10 grid grid-cols-2 gap-5 w-full">
      <div className=" m-10">
        <img src={product.image} alt="" className="w-80 p-10" />
        <div className="grid grid-cols-6 gap-2 m-5">
          <img src={product.image} alt="" className="w-10"/>
          <img src={product.image} alt="" className="w-10"/>
          <img src={product.image} alt="" className="w-10"/>
          <img src={product.image} alt="" className="w-10"/>
          <img src={product.image} alt="" className="w-10"/>
          <img src={product.image} alt="" className="w-10"/>
        </div>
        <h1>{product.description}</h1>
      </div>
      <div className="m-12">
        <h1>{product.title}</h1>
        <h1 className="text-gray-500">{product.category}</h1>
        <br />
        <h1 className="text-blue-500 font-bold">${product.price}</h1>
        <br />
        <div>
          <p>Attribute: </p>
          <p>some type</p>
          <p>some color</p>
        </div>
        <br />
        <button className="bg-blue-600 text-white font-bold m-5 p-3 rounded-2xl">Add to cart</button>
        <button className="bg-blue-600 text-white font-bold m-5 p-3 rounded-2xl">Checkout</button>
      </div>
    </div>
  );
}

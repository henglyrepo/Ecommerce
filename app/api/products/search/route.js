import { NextResponse } from "next/server";

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=5');
    const products = await res.json();
    return products;

}
  

export async function GET(request) {
    const products = await fetchProducts();
    const { searchParams } = new URL(request.url);
    console.log(request.url);
    const query = searchParams.get('query');

    const filteredProducts = products.filter((products) => {
        return products.title.toLowerCase().includes(query.toLowerCase()) || products.category.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filteredProducts);
}
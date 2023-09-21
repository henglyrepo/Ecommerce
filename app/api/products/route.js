import { NextResponse } from "next/server";

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json();
    return products;

}

export async function GET(request) {
    const products = await fetchProducts();
    return NextResponse.json(products);
}
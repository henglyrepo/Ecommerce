import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";


async function fetchProductsFromAPI() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json();
    return products;

}

async function fetchProductsFromDatabase() {
    const products = await prisma.product.findMany();
    return products;
  }



export async function GET(request) {
    try {
      const [apiProducts, dbProducts] = await Promise.all([
        fetchProductsFromAPI(),
        fetchProductsFromDatabase()
      ]);
      const allProducts = [...apiProducts, ...dbProducts];
      return NextResponse.json(allProducts);
    } catch (error) {
      return NextResponse.json({ message: "GET ERROR", error }, { status: 500 });
    }
  }
  


export async function POST(request) {
    try {
        const { title, category, price, description } = await request.json();
        const newProduct = await prisma.product.create({
            data: {
                title,
                category,
                price,
                description,
            }
        });
        return NextResponse.json( {message: "Creating success", newProduct}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating product", error }, { status: 500 });
    }
}
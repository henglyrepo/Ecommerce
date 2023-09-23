import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb";



export async function GET(request,  {params}) {
    try {
        const {id} = params
        const products = await prisma.product.findUnique({
            where: {
                id
            }
        })
        if (!products) {
            return NextResponse.json({message: "NOT FOUND", error}, {status: 404})
        }

        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ message: "GET ERROR", error }, { status: 500 });
    }
}

export async function PATCH(request,  {params}) {
    try {
        const body = await request.json()
        const {title, category, price, description} = body;
        const {id} = params
        const updateProduct = await prisma.product.update({
            where: {
                id
            },
            data: {
                title,
                category,
                price,
                description,
            }
        })

        if (!updateProduct) {
            return NextResponse.json({message: "NOT FOUND", error}, {status: 404})
        }

        return NextResponse.json(updateProduct)
    } catch (error) {
        return NextResponse.json({message: "UPDATE ERROR", error}, {status: 500})
    }
}


export async function DELETE(request,  {params}) {
    try {
        const {id} = params
        const deleteProduct = await prisma.product.delete({
            where: {
                id
            }
        })
        if (!deleteProduct) {
            return NextResponse.json({message: "NOT FOUND", error}, {status: 404})
        }
        return NextResponse.json(deleteProduct)

    } catch (error) {
        return NextResponse.json({message: "DELETE ERROR", error}, {status: 500})
    }
}
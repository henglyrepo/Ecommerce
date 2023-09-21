
export default async function getProduct(id) {
    
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!res.ok) {
        throw new Error(`Could not fetch product: ${id}`)
    }
    
    return await res.json()
}

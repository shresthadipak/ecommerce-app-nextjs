export default function Products({products}){
    return (
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>description</td>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => 
                 (
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                 ))}
            </tbody>
        </table>
    )
}

export async function getStaticProps({ params }){
    const res = await fetch("http://localhost:8080/api/products/")
    const products = await res.json()

    return { props: {products} }
}
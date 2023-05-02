import { useEffect, useState } from "react"
import Product from "./Product"
import { useRouter } from "next/router"

const ProductList = ({product}) => {
  const PRODUCT_API_BASE_URL = "http://localhost:8080/api/products/"
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const authToken = localStorage.getItem("token")
    const fetchData = async() => {
        setLoading(true)
        try {
            const response = await fetch(PRODUCT_API_BASE_URL, {
                method : "GET",
                headers: {
                    "Authorization" : `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                }
            })
            
            const products = await response.json()
            setProducts(products)  
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    fetchData()
  }, [product])

  return (
    <>
      <div className=" container mx-auto my-8">
        <div className="flex shadow border-b">
            <table className=" min-w-full">
                <thead className=" bg-gray-50">
                    <tr>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Product Title</th>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Quantity</th>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Price</th>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Description</th>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Product Image</th>
                        <th className=" text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                   <tbody className=" bg-white">
                    {products?.map((product) => (
                        <Product product={product} key={product.id}/>
                    ))} 
                   </tbody> 
                )}
            </table>    
        </div>
      </div>      
    </>

  )
}

export default ProductList
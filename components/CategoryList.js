import { useEffect, useState } from "react"
import Category from "./Category"

const CategoryList = ({category}) => {
    const CATEGORY_API_BASE_URL = "http://localhost:8080/api/categories/"
    const [categories, setcategories] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await fetch(CATEGORY_API_BASE_URL, {
                    method : "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                const categories = await response.json()
                setcategories(categories)  
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [category])

  return (
    <div className=" container mx-auto my-8">
        <div className="flex shadow border-b">
            <table className=" min-w-full">
                <thead className=" bg-gray-50">
                    <tr>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Category Name</th>
                        <th className=" text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Description</th>
                        <th className=" text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className=" bg-white">
                        {categories?.map((category) => (    
                            <Category category={category} key={category.id}/>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default CategoryList
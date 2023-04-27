import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className=" bg-gray-800">
                <div className=" h-16 px-8 flex items-center">
                    <p className=" text-white font-bold">Ecommerce Application - Dashboard</p>
                </div>   
            </div>
            <div className=" bg-gray-50">
                <div className=" h-8 px-4 flex items-center">
                    <nav>
                        <Link href="/" className="my-4">Home</Link> |
                        <Link href="/products" className="mx-4 my-4">Products</Link> |
                        <Link href="/category" className="mx-4">Product Category</Link> 
                    </nav>
                    
                </div>
            </div>
        </>
        
    )
}

export default Navbar
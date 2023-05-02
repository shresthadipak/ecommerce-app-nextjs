import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const LogoutPage = () => {
    const router = useRouter()

    useEffect(() => {
        localStorage.removeItem("token")
        router.push("/logout")
    }, [])


  return (
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Ecommerce App    
            </a>
            <div className=" text-red-900">You are successfully Logout !!</div>
            <div className=" text-blue-900">Please <Link href={"/login"}>Login</Link></div>
            </div>
        </section>
    </div>    
  )
}

export default LogoutPage
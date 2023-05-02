import { useRouter } from "next/router"
import { useEffect } from "react"

function withAuth(Component){
    return function AuthenticationComponent(props){
        const router = useRouter()

        useEffect(() => {
            const authToken = localStorage.getItem("token")
            if(!authToken){
                router.push("/login")
            }
        }, [])

        return <Component {...props} />
    }
}

export default withAuth
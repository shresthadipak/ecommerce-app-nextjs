import { useRouter } from "next/router"
import { useEffect } from "react"

function withAuth(Component){
    return function AuthenticationComponent(props){
        const router = useRouter()

        useEffect(() => {
            const authToken = localStorage.getItem("token")
            if(!authToken || !isValid(authToken)){
                router.push("/login")
                localStorage.removeItem("token")
            }
        }, [])

        return <Component {...props} />
    }
}

function isValid(token){
    // Parse the token and check if it is expired
   const parsedToken = JSON.parse(atob(token.split(".")[1]));
   return parsedToken.exp > Date.now() / 1000;
}

export default withAuth
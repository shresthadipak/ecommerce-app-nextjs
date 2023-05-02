import LogoutPage from "@/components/LogoutPage"
import Head from "next/head"

const logout = () => {
  return (
    <>
        <Head>
            <title>E-commerce App</title>
        </Head>
        <main>
            <LogoutPage />
        </main>
    </>
  )
}

export default logout
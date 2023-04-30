import LoginPage from "@/components/LoginPage"
import Head from "next/head"

const login = () => {
  return (
    <>
        <Head>
            <title>E-commerce App</title>
        </Head>
        <main>
            <LoginPage />
        </main>

    </>
  )
}

export default login
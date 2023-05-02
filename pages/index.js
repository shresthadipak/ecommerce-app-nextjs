import Navbar from '@/components/Navbar'
import Head from 'next/head'
import withAuth from '@/utils/withAuth'

function Home() {
  return (
    <>
      <Head>
        <title>E-commerce App</title>
      </Head>
      <main>
        <Navbar />
        <h3 className=" text-center py-10 font-bold">Welcome to our Ecommerce Dashboard</h3>
      </main>
    </>
  )
}

export default withAuth(Home)

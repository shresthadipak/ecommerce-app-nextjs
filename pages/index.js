import AddCategory from '@/components/AddCategory'
import Navbar from '@/components/Navbar'
import ProductList from '@/components/CategoryList'
import Head from 'next/head'

export default function Home() {
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

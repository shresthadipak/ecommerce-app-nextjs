import Navbar from '@/components/Navbar'
import ProductList from '@/components/ProductList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce App</title>
      </Head>
      <main>
        <Navbar />
        <ProductList />
      </main>
    </>
  )
}

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import AddProduct from '@/components/AddProduct'
import withAuth from '@/utils/withAuth'

const products = () => {
  return (
    <>
      <Head>
        <title>E-commerce App</title>
      </Head>
      <main>
        <Navbar />
        <AddProduct />
      </main>
    </>
  )
}

export default withAuth(products)
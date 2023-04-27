import AddCategory from '@/components/AddCategory'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

const category = () => {
  return (
    <>
      <Head>
        <title>E-commerce App</title>
      </Head>
      <main>
        <Navbar />
        <AddCategory />
      </main>
    </>
  )
}

export default category
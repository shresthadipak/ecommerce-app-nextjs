import { useEffect, useState } from 'react'
import Image from 'next/image'
import withAuth from '@/utils/withAuth'

const ProductImage = ({ src, width }) => {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    const authToken = localStorage.getItem('token')
    const headers = authToken ? { "Authorization": `Bearer ${authToken}` } : {}

    const fetchImage = async () => {
        const response = await fetch(`http://localhost:8080/api/products/image/${src}?w=${width}`, { headers })
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setImageSrc(url)
    }

    fetchImage()
}, [])


  return (
    <Image
      src={imageSrc}
      alt="Product Image"
      width={width}
      height={50}
    />
  )
}

export default withAuth(ProductImage);

import Image from "next/image"

const myLoader = ({src, width}) => {
    return `http://localhost:8080/api/products/image/${src}?w=${width}`
} 

const Product = ({product}) => {
  return (
    <tr key={product.id}>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{product.title}</div>
        </td>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{product.quantity}</div>
        </td>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{product.price}</div>
        </td>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{product.description}</div>
        </td>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">
                <Image 
                loader={myLoader}
                src={product.productImage}
                 width={100}
                 height={50} />
            </div>
        </td>
        <td className=" text-right px-6 py-4 whitespace-nowrap">
            <a href="#">Edit</a> | <a href="#">Delete</a>
        </td>
    </tr>
  )
}

export default Product
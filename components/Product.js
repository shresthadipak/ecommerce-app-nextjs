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
        <td className=" text-right px-6 py-4 whitespace-nowrap">
            <a href="#">Edit</a> | <a href="#">Delete</a>
        </td>
    </tr>
  )
}

export default Product
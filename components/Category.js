const Category = ({category}) => {
  return (
    <tr key={category.id}>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{category.categoryTitle}</div>
        </td>
        <td className=" text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{category.categoryDescription}</div>
        </td>
        <td className=" text-right px-6 py-4 whitespace-nowrap">
            <a href="#">Edit</a> | <a href="#">Delete</a>
        </td>
    </tr>
  )
}

export default Category
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"
import ProductList from "./ProductList"

const AddProduct = () => {
    const ADD_PRODUCT_API_BASE_URL = "http://localhost:8080/api/products/addProduct"
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState({
        id: "",
        title: "",
        quantity: 0,
        price: 0,
        description: "",
        image: null,
        categoryId: ""
    })

    const [responseCatgeory, setResponseCategory] = useState({
        id: "",
        title: "",
        quantity: 0,
        price: 0,
        description: "",
        image: null,
        categoryId: ""
    })

    function closeModal(){
        setIsOpen(false)
    }

    function openModel(){
        setIsOpen(true)
    }

    const handleChange = (event) =>{
        const value = event.target.value
        setProduct({...product, [event.target.name]: value})
    }

    const handleImageChange = (event) => {
        setProduct({
          ...product,
          image: event.target.files[0]
        })
      }

    const saveProduct = async(e) => {
        e.preventDefault()
        const authToken = localStorage.getItem("token")

        const formData = new FormData()
        formData.append("title", product.title)
        formData.append("quantity", product.quantity)
        formData.append("price", product.price)
        formData.append("description", product.description)
        formData.append("image", product.image)
        formData.append("categoryId", product.categoryId)

        const response = await fetch(ADD_PRODUCT_API_BASE_URL, {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${authToken}`
            },
            body: formData
        })
        if(!response.ok){
            throw new Error("Something went wrong!!")
        }

        const _product = await response.json()
        setResponseCategory(_product)
        reset(e)
    }

    

    const reset = (e) => {
        e.preventDefault()
        setProduct({
            id: "",
            title: "",
            quantity: 0,
            price: 0,
            description: "",
            image: null,
            categoryId: ""
        })
        setIsOpen(false)
    }

  return (
    <>
        <div> <h2 className=" text-center font-bold my-10">Product List</h2></div>
        <div className="px-6 mx-6 my-6">
            <button className="px-4 rounded bg-blue-800 text-white" onClick={openModel}>Add Product</button>
        </div>

       
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                    <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Add new product
                    </Dialog.Title>
                    <div>
                        <div><label>Title</label><input type="text" className=" border-2" name="title" onChange={(e) => handleChange(e)} value={product.title}/></div>
                        <div><label>Quantity </label><input type="number" className=" border-2" name="quantity" onChange={(e) => handleChange(e)} value={product.quantity}/></div>
                        <div><label>Price </label><input type="number" className=" border-2" name="price" onChange={(e) => handleChange(e)} value={product.price}/></div>
                        <div><label>Description </label><input type="text" className=" border-2" name="description" onChange={(e) => handleChange(e)} value={product.description}/></div>
                        <div><label>Image </label><input type="file"  accept="image/*" className=" border-2" name="image" onChange={handleImageChange}/></div>
                        <div><label>Category </label><input type="number" className=" border-2" name="categoryId" onChange={(e) => handleChange(e)} value={product.categoryId}/></div>
                        <div><button onClick={saveProduct}>Save</button> | <button onClick={reset}>Close</button></div>
                    </div> 
                </div>
               
            </Transition.Child>
            </div>
            </Dialog>
        </Transition>  
        <ProductList product={responseCatgeory}/>
    </>
  )
}

export default AddProduct
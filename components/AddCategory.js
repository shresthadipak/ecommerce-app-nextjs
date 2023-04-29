import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Category from "./Category"
import CategoryList from "./CategoryList"

const AddCategory = () => {
    const ADD_CATEGORY_BASE_URL = "http://localhost:8080/api/categories/addCategory"
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState({
        id: "",
        categoryTitle: "",
        categoryDescription: ""
    })

    const [responseCatgeory, setResponseCategory] = useState({
        id: "",
        categoryTitle: "",
        categoryDescription: ""
    })

    function closeModal(){
        setIsOpen(false)
    }

    function openModel(){
        setIsOpen(true)
    }

    const handleChange = (event) => {
        const value = event.target.value
        setCategory({...category, [event.target.name]: value})
    }

    const saveCategory = async(e) => {
        e.preventDefault()

        const response = await fetch(ADD_CATEGORY_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        })
        if(!response.ok){
            throw new Error("Something went wrong!!")
        }
        const _category = await response.json();
        setResponseCategory(_category)
        reset(e)   
    }

    const reset = (e) => {
        e.preventDefault()
        setCategory({
            id: "",
            categoryTitle: "",
            categoryDescription: ""
        })
        setIsOpen(false)
    }

  return (
    <>
        <div> <h2 className=" text-center font-bold my-10">Category List</h2></div>
        <div className="px-6 mx-6 my-6">
            <button className="px-4 rounded bg-blue-800 text-white" onClick={openModel}>Add Category</button>
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
                    Add new category
                    </Dialog.Title>
                    <div>
                        <div><label>Title</label><input type="text" className=" border-2" name="categoryTitle" onChange={(e) => handleChange(e)} value={category.categoryTitle}/></div>
                        <div><label>Description </label><input type="text" className=" border-2" name="categoryDescription" onChange={(e) => handleChange(e)} value={category.categoryDescription}/></div>
                        <div><button onClick={saveCategory}>Save</button> | <button onClick={reset}>Close</button></div>
                    </div> 
                </div>
               
            </Transition.Child>
            </div>
            </Dialog>
        </Transition>  
        <CategoryList category={responseCatgeory}/>
    </>
    
  )
}

export default AddCategory
import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import BudgetModal from './BudgetModal';
import { FaRegTrashAlt } from "react-icons/fa";

const BudgetManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categories, setCategroies] = useState([
        { title: 'Vendor 1', price: 220000, checked: false },
        { title: 'Vendor 2', price: 150000, checked: false },
        { title: 'Vendor 3', price: 300000, checked: false },
        { title: 'Vendor 4', price: 200000, checked: false },
        { title: 'Vendor 5', price: 100000, checked: false },
    ]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    const onClickTrash = (index)=>{
        const updatedCategory = [...categories];
        updatedCategory.splice(index, 1);
        setCategroies(updatedCategory)
        console.log("Pressed");
    }

    const addCategory = (newCategory)=>{
        console.log(newCategory)
        setCategroies([...categories, newCategory])
        closeModal();
    }

    return (
        <div className=''>
            <div className='w-[350px] bg-[#F4F4FF] rounded-lg shadow-lg'>
                <div className='flex  bg-[#DADAE6] rounded-lg justify-center font-inria shadow-lg flex-col transition duration-200 hover:scale-105'>
                    <button className='flex flex-row items-center justify-center text-[#AD563B] transition transform font-bold py-2' onClick={openModal}>
                        <IoIosAddCircleOutline size={20} className='mx-1' />
                        Add Category
                    </button>
                </div>
                {isModalOpen && <BudgetModal closeModal={closeModal} addCategory={addCategory}/>}

                <div className='flex font-inria py-2 border-t-2 border-t-gray-300 justify-between px-4 font-bold'>
                    <div>Category</div>
                    <div className='flex-1 text-center'>Prices</div>
                </div>

                {
                    categories.map((category, index)=>(
                        <div className='flex justify-between items-center font-inria py-2 border-t-2 border-t-gray-300 px-4'>
                        <div>{category.title}</div>
                        <p>₹{category.price}</p>
                        <FaRegTrashAlt size={20} className='text-gray-500 cursor-pointer' onClick={()=>onClickTrash(index)}/>
                    </div>
                    ))
                }

            </div>
        </div>
    )
}

export default BudgetManagement
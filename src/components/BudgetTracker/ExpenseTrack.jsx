import React, { useState } from 'react';
import { MdAttachMoney } from "react-icons/md";
import ExpenseItem from './ExpenseItem';
import { FaRupeeSign } from "react-icons/fa";

const ExpenseTrack = () => {
    const [categories, setCategroies] = useState([
        { title: 'Vendor 1', price: 220000, checked: false },
        { title: 'Vendor 2', price: 150000, checked: false },
        { title: 'Vendor 3', price: 300000, checked: false },
        { title: 'Vendor 4', price: 200000, checked: false },
        { title: 'Vendor 5', price: 100000, checked: false },
    ]);

    const handleCheckboxChange = (index) => {
        const updatedCategories = [...categories];
        updatedCategories[index].checked = !updatedCategories[index].checked;
        setCategroies(updatedCategories);
    };

    const totalPrice = categories.reduce((result, category) => result + category.price, 0);
    const checkedAmount = categories.reduce((result, category) => {return category.checked ? result + category.price : result}, 0);
    const remainingAmount = totalPrice - checkedAmount;

    return (
        <div className=''>
            <div className='bg-[#F4F4FF] w-[400px] mx-5 rounded-lg shadow-lg'>
                <div className='flex justify-center font-inria font-bold items-center py-2 w-full bg-[#DADAE6] rounded-lg'>
                    <FaRupeeSign size={15} className='mx-1' />
                    Total Expense
                </div>

                {categories.map((category, index) => (
                    <ExpenseItem
                        key={index}
                        label={category}
                        checked={category.checked}
                        onCheckboxChange={() => handleCheckboxChange(index)}
                    />
                ))}

                <div className='flex justify-evenly px-5 py-5 border-t-gray-300 border-t-2'>
                    <div className='flex justify-evenly w-[350px]'>
                        <span>Total Price</span>
                        <span>₹{totalPrice}</span>
                    </div>
                </div>
                <div className='flex justify-evenly px-5 py-1'>
                    <div className='flex justify-evenly w-[350px]'>
                        <span>Remaining</span>
                        <span>₹{remainingAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseTrack;
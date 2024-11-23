import React from 'react';

const ExpenseItem = ({ label, checked, onCheckboxChange }) => {
    return (
        <div className='flex justify-evenly py-2 px-5'>
            <div className='flex justify-evenly w-[350px]'>
                <span className={checked ? 'line-through' : ''}>{label.title}</span>
                <span className={checked ? 'line-through' : ''}>₹{label.price}</span>
            </div>
            <input
                type='checkbox'
                checked={checked}
                onChange={onCheckboxChange}
                className='mx-2'
            />
        </div>
    );
};

export default ExpenseItem;

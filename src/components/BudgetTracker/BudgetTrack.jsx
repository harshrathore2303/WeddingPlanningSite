import React from 'react'
import ToggleButton from '../../CustomComponents/CustomToggleButton'
import { MdCalculate } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import BudgetManagement from './BudgetManagement';
import ExpenseTrack from './ExpenseTrack';
import Recommendation from '../Recommendation';

const BudgetTrack = () => {
    const buttonData = [
        { label: "Budget", icon: MdCalculate },
    ];
    return (
        <div className='m-4 flex flex-col'>
            <ToggleButton buttons={buttonData}/>
            <div className='flex justify-between mt-4'>
                <BudgetManagement />
                <ExpenseTrack/>
                <Recommendation />
            </div>
        </div>
    )
}

export default BudgetTrack
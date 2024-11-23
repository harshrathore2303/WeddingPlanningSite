import React, { useState } from 'react'
import ToggleButton from '../CustomComponents/CustomToggleButton'
import { MdCalculate } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { RiGroupFill } from "react-icons/ri";
import BudgetManagement from './BudgetTracker/BudgetManagement';
import ExpenseTrack from './BudgetTracker/ExpenseTrack';
import Recommendation from './BudgetTracker/Recommendation';
import GuestList from './GuestList/GuestList';

const PlanningTools = () => {
    const [activeTab, setActiveTab] = useState("Budget");
    const [totalGuest, setTotalGuest] = useState(0);
    const buttonData = [
        { label: "Budget", icon: MdCalculate, isOpen: false },
        { label: "GuestList", icon: RiGroupFill, isOpen: false },
        { label: "CheckList", icon: GoChecklist, isOpen: false },
    ];
    return (
        <div>
            <div className='p-4 flex flex-col bg-[#FDF5E6] min-h-screen'>
                <ToggleButton buttons={buttonData} setActiveTab={setActiveTab}/>

                {/* div for budget tracking */}
                {
                    activeTab == "Budget"
                     && 
                    <div className='flex justify-between mt-4'>
                    <BudgetManagement />
                    <ExpenseTrack />
                    <Recommendation />
                    </div>
                }
                


                {/* div for guest list */}
                {
                    activeTab == "GuestList" && <div>
                        <GuestList setTotalGuest={setTotalGuest}/>
                    </div>
                }

                {/* div for checklist */}
                {
                    activeTab == "CheckList" && <div>
                        check
                    </div>
                }
            </div>
        </div>

    )
}

export default PlanningTools
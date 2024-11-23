import React from 'react'
import { GoChecklist } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import CustomToggleButton from '../../CustomComponents/CustomToggleButton'
import CheckList from './CheckList'

const Tools = () => {
    const buttonData = [
        { label: "CheckList", icon: GoChecklist, isOpen: true },
        { label: "GuestList", icon: IoPeople, isOpen: false },
        // { label: "Gifts", icon: GoChecklist },
    ];



  return (
    <div>
        <div className='m-4 flex flex-col'>
        <CustomToggleButton buttons={buttonData}/>
        </div>
            <CheckList/>
    </div>
  )
}

export default Tools
import React, { useState } from 'react'

const ToggleButton = ({buttons}) => {
    const [active, setActive] = useState(buttons[0].label);
    return (
        <div>
            <div className="flex justify-center">
                <div className="inline-flex items-center rounded-full shadow-md bg-white border-2 border-gray-300">
                    {
                        buttons.map((button)=>(
                            <button
                        className={`flex items-center justify-center px-2 py-2 rounded-full focus:outline-none text-black text-lg font-semibold w-40 transition ${active === button.label ? "bg-gray-300" : "bg-white"
                            }`}
                        onClick={() => setActive(button.label)}
                    >
                        {button.icon && <button.icon size={30} className=''/>}
                        {button.label}
                    </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ToggleButton
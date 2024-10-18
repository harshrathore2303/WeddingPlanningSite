import React, { useState } from 'react'
import { MdCalculate } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

const ToggleButton = () => {
    const [active, setActive] = useState("budget");
    return (
        <div>
            <div className="m-4 flex justify-center">
                <div className="inline-flex items-center rounded-full shadow-md bg-white border-2 border-gray-300">
                    {/* Budget Button */}
                    <button
                        className={`flex items-center justify-center px-2 py-2 rounded-full focus:outline-none text-black font-semibold text-lg w-40 transition ${active === "budget" ? "bg-gray-300" : "bg-white"
                            }`}
                        onClick={() => setActive("budget")}
                    >
                        <MdCalculate size={30} className='' />

                        Budget
                    </button>

                    {/* Payments Button */}
                    <button
                        className={`flex items-center justify-center px-2 py-2 rounded-full focus:outline-none text-black text-lg font-semibold w-40 transition ${active === "payments" ? "bg-gray-300" : "bg-white"
                            }`}
                        onClick={() => setActive("payments")}
                    >
                        <MdOutlinePayment size={30} className='' />
                        Payments
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToggleButton
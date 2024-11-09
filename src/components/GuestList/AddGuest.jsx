import React, { useEffect, useState } from 'react'

const AddGuest = ({ list, setList, setIsGuestOpen, data }) => {
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleCheck = (id) => {
        const updatedList = list.map((l) =>
            l.id === id ? { ...l, checked: !l.checked } : l
        );
        setList(updatedList);
        console.log(list);
    };



    return (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.5)] flex justify-center items-center z-1 ">
            <div className="bg-white p-6 rounded-lg w-[60%] min-h-[30%] flex flex-col border-[1px] border-black overflow-auto">
                {/* Details */}
                <div className='flex gap-4'>
                    <input placeholder='guest name' className="border-2 border-gray-600 rounded-md w-full mb-8 p-2" />
                    <input placeholder='phone number' className="border-2 border-gray-600 rounded-md w-full mb-8 p-2" />
                    <input placeholder='email' className="border-2 border-gray-600 rounded-md w-full mb-8 p-2" />
                </div>

                {/* Attending */}
                <div className='flex gap-3 flex-wrap text-lg'>
                    Attending:
                    {
                        list.map((l) => {
                            return (
                                <label key={l.id} className='flex gap-1 mb-8'>
                                    <input type='checkbox' checked={l.checked} onChange={() => handleCheck(l.id)} />
                                    {l.event}
                                </label>
                            );
                        })
                    }
                </div>

                {/* Selection of Group */}
                <div className='flex gap-3 text-lg'>
                    Group:
                    {
                        <select className='border-[1px] border-gray-600 w-1/6 rounded-md' onChange={(e) => setSelectedGroup(e.target.value)}>
                            <option>Select</option>
                            {
                                data.map((g) => { return <option key={g.id} value={g.title}>{g.title}</option> })
                            }
                        </select>
                    }
                </div>

                {/* Button */}
                <div className="flex justify-end gap-4 mt-auto">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-full"
                        onClick={() => setIsGuestOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-full"
                        onClick={() => setIsGuestOpen(false)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddGuest
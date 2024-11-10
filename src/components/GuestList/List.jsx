import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import ListData from './ListData';

const List = ({ data }) => {
    return (
        <div className='flex w-[80%] border-2 border-gray-500 rounded-md py-5 px-1 mt-2 flex-col bg-[#D8BFD8] text-[#333333]'>
            {
                data.map((item) => {
                    return <>
                        <table className='w-[100%] table-fixed' key={item.id}>
                            <tr className=''>
                                <th className='text-left relative left-5  w-[80%] font-bold text-xl'>{item.title}<span className='text-gray-600 text-[12px] p-1'>{item.guests.length}</span></th>
                                <th className='text-center font-medium  w-[80%]'>Phone</th>
                                <th className='text-center font-medium  w-[100%]'>Email</th>
                                <th className='text-center font-medium  w-[100%]'>Invited</th>
                                <th className=' w-[10%] ' onClick={() => console.log(item.id)}><FaRegTrashAlt size={20} /></th>
                            </tr>
                        </table>
                        
                        {/* this will show all data under the heading of the table */}
                        <div className='bg-[#F5F5F5] rounded-lg w-full my-4'>
                            {
                                item.guests.map((guest) => {
                                    return <ListData guest={guest}/>
                                })
                            }
                        </div>
                    </>
                })
            }


        </div>
    )
}

export default List
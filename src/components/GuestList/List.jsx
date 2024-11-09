import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import ListData from './ListData';

const List = ({ data }) => {
    return (
        <div className='flex w-[70%] border-2 border-gray-500 rounded-md py-5 px-1 mt-2 flex-col'>
            {
                data.map((item) => {
                    return <>
                        <table className='w-[100%] table-fixed' key={item.id}>
                            <tr className=''>
                                <th className='text-left relative left-5  w-[80%] font-bold text-xl'>{item.title}</th>
                                <th className='text-center font-medium  w-[80%]'>Phone</th>
                                <th className='text-center font-medium  w-[100%]'>Email</th>
                                <th className='text-center font-medium  w-[100%]'>Attending</th>
                                <th className=' w-[10%] ' onClick={() => console.log(item.id)}><FaRegTrashAlt size={20} /></th>
                            </tr>
                        </table>
                        {/* this will show all data under the heading of the table */}
                        <div className='bg-[#d9d9d9] rounded-lg w-full my-4'>
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
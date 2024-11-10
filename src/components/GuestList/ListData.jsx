import {useState} from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const ListData = ({guest}) => {
    const [showAll, setShowAll] = useState(false);
    console.log(guest);

    const handleToggle = () => {
        setShowAll(prevState => !prevState);
    };

    const displayedItems = showAll ? guest.events : guest.events.slice(0, 1);
    return <>
        <table className='w-[100%] table-fixed '>
            <tr className='h-16'>
                <td className='relative left-5 w-[80%] font-medium'>{guest.name}</td>
                <td className='text-center font-normal w-[80%]'>{guest.phone}</td>
                <td className='text-center font-normal w-[100%] break-words'>{guest.email}</td>
                <td className="text-center font-normal w-[100%]">
                    
                    <div className="flex flex-wrap justify-center gap-1 items-center mt-2">

                        {displayedItems.map((event, index) => (
                            <div key={index} className="bg-[#FFB6C1] text-[#333333] px-3 py-1 rounded-md text-xs"> 
                                {event}
                            </div>
                        ))}
                        {/* If there are more than 2 attendees and not showing all, display the '...' as a button */}
                        {guest.events.length >= 2 && !showAll && (
                            <button
                                className="text-blue-500 mt-2 text-xs ml-2"     
                                onClick={handleToggle}
                            >
                                ...
                            </button>
                        )}

                        {/* If showing all, you can still keep the '...' button to hide them again */}
                        {guest.events.length >= 2 && showAll && (
                            <button
                                className="text-blue-500 mt-2 text-xs ml-2"
                                onClick={handleToggle}
                            >
                                ...
                            </button>
                        )}
                    </div>
                </td>
                <td className='w-[10%]'><FaRegTrashAlt size={20} /></td>
            </tr>
        </table>
    </>
}

export default ListData
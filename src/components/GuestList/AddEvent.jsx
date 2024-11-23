import React, {useState} from 'react'

const AddEvent = ({setIsEventOpen, setEventName}) => {
    const [title, setTitle] = useState("");

    const handleSave = () => {
        setEventName(title);
      setTitle("");
      setIsEventOpen(false);
    };
  
    return (
      <div className="fixed inset-0 bg-[rgb(0,0,0,0.5)] flex justify-center items-center z-10">
        <div className="bg-white p-6 rounded-lg w-96 border-[1px] border-black">
          <input
            className="border-2 border-gray-600 rounded-md w-full mb-8 p-2"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-full"
              onClick={() => setIsEventOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-full"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
}

export default AddEvent
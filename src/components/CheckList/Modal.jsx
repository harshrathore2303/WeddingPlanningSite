import React, { useState } from "react";

const Modal = ({ setAddTodo, setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, { id: tasks.length, description: "", checked: false }]);
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, description: value } : task
    );
    setTasks(updatedTasks);
  };

  const handleSave = () => {
    if (title.trim() === "") {
      setError("Title cannot be empty or just spaces");
      return;
    }

    const validTasks = tasks.filter((task) => task.description.trim() !== "");
    if (validTasks.length === 0) {
      setError("Please add at least one task with a description.");
      return;
    }

    const newTodo = {
      id: Math.random(),
      title,
      task: validTasks,
    };

    setAddTodo(newTodo);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg w-96 border-[1px] border-black">
        {/* Title Input */}
        <input
          className="border-2 border-gray-600 rounded-md w-full mb-4 p-2"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        {/* Error Message */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* Task Inputs */}
        <div className="mb-4">
          {tasks.map((task, index) => (
            <input
              key={index}
              className="border-2 border-gray-600 rounded-md w-full mb-2 p-2"
              placeholder={`Task ${index + 1}`}
              value={task.description}
              onChange={(e) => handleTaskChange(index, e.target.value)}
            />
          ))}
          <button
            className="text-blue-500 mt-2"
            onClick={handleAddTask}
          >
            + Add another task
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-full"
            onClick={() => setIsOpen(false)}
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
};

export default Modal;

import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Modal from "./Modal";

const initialTodo = [
  {
    id: 0,
    title: "Mehendi",
    task: [
      {
        id: 0,
        description: "Book a Mehendi artist and finalize designs for the bride and guests.",
        checked: false,
      },
      {
        id: 1,
        description: "Prepare the guest list for the Mehendi event and send invitations.",
        checked: false,
      },
      {
        id: 2,
        description: "Arrange decorations and seating for the Mehendi function.",
        checked: false,
      },
    ],
  },
  {
    id: 1,
    title: "Venue Booking",
    task: [
      {
        id: 0,
        description: "Research potential wedding venues based on theme and budget.",
        checked: false,
      },
      {
        id: 1,
        description: "Visit shortlisted venues and discuss available packages.",
        checked: false,
      },
      {
        id: 2,
        description: "Confirm and book the venue by signing the contract.",
        checked: false,
      },
    ],
  },
];

const CheckList = () => {
  const [todo, setTodo] = useState(initialTodo);
  const [showTask, setShowTask] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleShowTask = (id) => {
    const selectedTodo = todo.find((item) => item.id === id);
    setSelectedId(id);
    setShowTask(selectedTodo ? selectedTodo.task : []);
  };

  const handleCheckbox = (taskId) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === selectedId) {
        return {
          ...item,
          task: item.task.map((task) =>
            task.id === taskId ? { ...task, checked: !task.checked } : task
          ),
        };
      }
      return item;
    });

    setTodo(updatedTodo);
    const updatedTasks = updatedTodo.find((item) => item.id === selectedId).task;
    setShowTask(updatedTasks);
  };

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const deleteTask = (taskId) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === selectedId) {
        return {
          ...item,
          task: item.task.filter((task) => task.id !== taskId),
        };
      }
      return item;
    });

    setTodo(updatedTodo);
    const updatedTasks = updatedTodo.find((item) => item.id === selectedId).task;
    setShowTask(updatedTasks);
  };

  const deleteTodo = (todoId) => {
    const updatedTodoList = todo.filter((item) => item.id !== todoId);
    setTodo(updatedTodoList);
    setShowTask([]);
  };

  return (
    <div className="container pt-3">
      <div className="text-2xl font-semibold flex justify-center mb-5">
        <h1>CheckList</h1>
      </div>

      <div className="button flex break-words gap-5 text-xl">
        {todo.map((data) => (
          <div key={data.id} className="flex items-center">
            <button
              className="border-2 border-black py-2 px-5 rounded-full flex items-center"
              onClick={() => handleShowTask(data.id)}
            >
              {data.title}
              <button
                className="ml-2 text-red-500"
                onClick={() => deleteTodo(data.id)}
              >
                <GiCancel size={20} />
              </button>
            </button>
          </div>
        ))}

        <button
          className="border-2 border-black px-2 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <IoIosAdd size={30} />
        </button>
      </div>

      <div className="task-list mt-5">
        {showTask.map((task) => (
          <div key={task.id} className="task bg-white p-4 mb-3 rounded shadow">
            <label className="flex gap-2 items-center">
              <div className="aspect-square w-10 flex items-center justify-center">
                <input
                  type="checkbox"
                  className="scale-150"
                  checked={task.checked}
                  onChange={() => handleCheckbox(task.id)}
                />
              </div>
              <p className="font-medium text-lg">{task.description}</p>
            </label>
            <div className="font-semibold text-sm p-2">
              <p>done_by: N/A</p>
              <p>created_at: N/A</p>
            </div>
            <button
              className="text-red-500 mt-2"
              onClick={() => deleteTask(task.id)}
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>

      {isOpen && <Modal setAddTodo={addTodo} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default CheckList;

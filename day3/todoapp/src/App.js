import "./App.css";
import Task from "./Task";
import { useState } from "react";

function App() {
  const [taskItem, setTaskItem] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const deleteHandler = (element) => {
    var newList = allTasks.filter((task) => task != element);
    setAllTasks(newList);
  };

  const editHandler = (element) => {
    // take new value
    // cancel -> do nothing
    var newTaskName = prompt(`Update task : ${element}`);
    if (newTaskName == null) return;
    console.log(newTaskName);
    // task2 -> task4
    var newAllTasks = allTasks.map((task) =>
      task == element ? newTaskName : task
    );
    setAllTasks(newAllTasks);
  };

  // ["task1","task2","task3"]
  // ["<div> task1 <div><button>delete</button></div></div>",
  // "<div> task1 <div><button>delete</button></div></div>"]
  const showAllTasks = allTasks.map((element) => {
    return (
      <Task
        key={element}
        taskDetails={element}
        onDelete={() => deleteHandler(element)}
        onEdit={() => editHandler(element)}
      />
    );
  });

  return (
    <div className="App flex-row border-white border-[10px] w-screen">
      <input
        className="w-full h-12 p-2 rounded-md border-slate-300 border-[1px] mb-2"
        type="text"
        placeholder="add item..."
        value={taskItem}
        onChange={(e) => setTaskItem(e.target.value)}
      />

      <button
        className="h-fit w-fit bg-black text-white p-2 rounded-md mb-2"
        onClick={() => setAllTasks(allTasks.concat(taskItem))}
      >
        ADD
      </button>

      <div>{showAllTasks}</div>
    </div>
  );
}

export default App;

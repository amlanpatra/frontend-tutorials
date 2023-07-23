import "./App.css";
import Task from "./Task";
import { useState } from "react";

function App() {
  const [taskItem, setTaskItem] = useState("hello");

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
        onClick={() => alert(taskItem)}
      >
        ADD
      </button>
      <Task taskDetails={"Task 1"} />
      <Task taskDetails={"Task 2"} />
      <Task taskDetails={"Task 4"} />
    </div>
  );
}

export default App;

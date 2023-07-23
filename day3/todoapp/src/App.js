import "./App.css";
import Task from "./Task";
function App() {
  return (
    <div className="App flex-row border-white border-[10px] w-screen">
      <Task taskDetails={"Task 1"} />
      <Task taskDetails={"Task 2"} />
      <Task taskDetails={"Task 3"} />
    </div>
  );
}

export default App;

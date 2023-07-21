import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <div className="grid place-content-center h-screen border-[20px] border-red-500">
        <div className="flex">
          <Box text={"hello"} />
          <Box text={"how"} />
          <Box text={"are"} />
          <Box text={"you"} />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [anotherCounter, setAnotherCounter] = useState(0);

  useEffect(() => {
    console.log("UseEffect reloaded of counter1");
  }, [counter]);

  useEffect(() => {
    alert("UseEffect reloaded of counter2");
  }, [anotherCounter]);

  // No brackets : run on every reload
  // Brackets with state : run on change of that state
  // Brackers without any value : run only first time

  return (
    <div>
      <h1>Button 1 clicked {counter} times</h1>
      <br />
      <h1>Button 2 clicked {anotherCounter} times</h1>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Button 1</button>
      <br />
      <br />
      <button onClick={() => setAnotherCounter(anotherCounter + 1)}>
        Button 2
      </button>
    </div>
  );
}

export default App;

// UseState hook
//  page reload, data storage

// UseEffect hook
//  primary : when page reloads during useState -> do some change

// on every reload
// "hello world"

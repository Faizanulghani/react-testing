import { useState } from "react";
import "./App.css";

function App() {
  let [data, setData] = useState("");
  return (
    <div className="App">
    <h1>{data}</h1>
    <button onClick={() => setData("Hello")}>Click</button>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  let [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Snapshot test</h1>
      <button onClick={() => setData("Hello World")}>Update Data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  let [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Test Click Event with Button</h1>
      <button onClick={() => setData("Hello World")}>Update Data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;

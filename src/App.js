import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [data, setData] = useState();
  return (
    <div className="App">
      <h1>Test onChange Event with Input Text</h1>
      <input
        type="text"
        onChange={(e) => setData(e.target.value+" world")}
        value={data}
      />
    </div>
  );
}

export default App;

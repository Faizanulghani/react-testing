import "./App.css";
import { useState } from "react";
import { handleOtherMethod } from "./helper";

function App() {
  let [data, setData] = useState("");

  const handleBtn = () => {
    setData("Updated Data");
  };

  

  return (
    <div className="App">
      <h1>Functional Component method Test</h1>
      <button data-testid="button" onClick={handleBtn}>
        Update Data
      </button>
      <button onClick={handleOtherMethod}>Print</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;

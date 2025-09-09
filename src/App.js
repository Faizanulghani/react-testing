import { useState } from "react";
import "./App.css";

function App() {
  let [data, setData] = useState("");
  return (
    <div className="App">
      <h1>onChange Event Testing | Keyboard Interactions</h1>
      <h2>{data}</h2>
      <input type="texxt" value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <h1>QueryBy</h1>
      {data ? <h1>Data Found</h1> : <h1>No Data Found</h1>}
    </div>
  );
}

export default App;

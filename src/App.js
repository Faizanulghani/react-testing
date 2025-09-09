import "./App.css";

function App() {
  let login = false;
  return (
    <div className="App">
      <h1>QueryBy</h1>
      <button>{login ? "Login" : "Logout"}</button>
    </div>
  );
}

export default App;

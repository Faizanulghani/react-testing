import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>getByRole</h1>
      <button>CLick Me 1</button>
      <button>CLick Me 2</button>
      <label htmlFor="user">User Name</label>
      <input type="text" id="user" />
      <label htmlFor="age">User Age</label>
      <input type="text" id="age" />
      <div role="dummy">Dummy Text</div>
    </div>
  );
}

export default App;

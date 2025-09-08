import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>RTL Query : getByLabelText</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" defaultValue={"anil"} />

      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" defaultChecked={true} />
    </div>
  );
}

export default App;

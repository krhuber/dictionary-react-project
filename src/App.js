import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <a href="/" className="btn btn-primary">
        Hello
      </a>
    </div>
  );
}

export default App;

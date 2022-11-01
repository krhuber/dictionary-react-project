import logo from "./logo.png";
import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer className="App-footer text-center">
          Coded by Kathryn Huber
        </footer>
      </div>
    </div>
  );
}

export default App;

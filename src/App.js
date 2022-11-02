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
          This project was coded by{" "}
          <a
            href="https://remarkable-kheer-01cc00.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Kathryn Huber
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/krhuber/dictionary-react-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

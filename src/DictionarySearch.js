import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
import Results from "./Results";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search"
          className="form-control w-50"
          onChange={handleKeywordChange}
        />
      </form>
      <br />
      <Results results={results} />
    </div>
  );
}

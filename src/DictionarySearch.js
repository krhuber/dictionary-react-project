import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

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
          className="form-control w-50"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}

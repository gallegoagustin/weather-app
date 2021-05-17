import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const reset = function() {
    setCity("");
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      reset();
    }}>
      <input id='searchBox'
        type="text"
        placeholder="Example: 'Buenos Aires'"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input id='searchButton' type="submit" value="Find" />
    </form>
  );
}
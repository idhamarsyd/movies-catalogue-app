import "./App.css";
import Search from "./components/search";
import MovieList from "./components/movieList";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      // function
      console.log(input);
    }
  };

  return (
    <div className="App">
      <Search
        active={input !== "" ? true : false}
        onChange={(e) => inputHandler(e)}
        onClear={() => setInput("")}
        value={input}
        onEnter={(e) => enterHandler(e)}
      />
      <MovieList />
      <MovieList />
    </div>
  );
}

export default App;

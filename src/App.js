import "./App.css";
import Search from "./components/search";
import MovieList from "./components/movieList";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "./stores/movieReducer";

function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { data, loadingState } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovie("man"));
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      if (input !== "") {
        dispatch(fetchMovie(input));
      }
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
      {loadingState ? (
        <h1 className="headline-text loading-text">Getting the movies...</h1>
      ) : (
        <MovieList data={data} />
      )}
    </div>
  );
}

export default App;

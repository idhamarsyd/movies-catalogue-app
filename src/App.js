import "./App.css";
import Search from "./components/search";
import MovieList from "./components/movieList";
import MovieDetail from "./pages/movieDetail";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "./stores/movieReducer";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { data, loadingState, queryID } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovie("the last"));
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      if (input !== "") {
        if (window.location.pathname !== "/") {
          navigate("/");
        }
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
        <Routes>
          <Route path="/" element={<MovieList data={data} />} />
          <Route path={`/movie/${queryID}`} element={<MovieDetail />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

import { useNavigate } from "react-router-dom";
import { setQueryID } from "./../stores/movieReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetail } from "./../stores/movieReducer";

const MovieList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorState } = useSelector((state) => state.movie);

  const pressHandler = async (id) => {
    await navigate(`/movie/${id}`);
    await dispatch(setQueryID(id));
    dispatch(fetchMovieDetail(id));
  };

  const renderMovie = (list) => {
    const renderResults = [];
    for (var i = 0; i < list.length; i += 4) {
      renderResults.push(
        <div className="list-container">
          {list.slice(i, i + 4).map((movie) => (
            <>
              <div
                className="movie-container"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 48.44%, rgba(0, 0, 0, 0.8) 100%), url(${movie.Poster})`,
                }}
                onClick={() => pressHandler(movie.imdbID)}
              >
                <div className="movie-info">
                  <p className="caption-text movie-info-text">{movie.Year}</p>
                </div>
                <h1 className="headline-text">{movie.Title}</h1>
              </div>
            </>
          ))}
        </div>
      );
    }
    return renderResults;
  };

  return errorState ? (
    <h1 className="headline-text loading-text">Oops! There was a mistake.</h1>
  ) : (
    renderMovie(data)
  );
};

export default MovieList;

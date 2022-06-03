import RatingChip from "./../components/ratingChip";

const MovieList = ({ data }) => {
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
              >
                <div className="movie-info">
                  <p className="caption-text movie-info-text">{movie.Year}</p>
                  {/* <RatingChip label="4.5" /> */}
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

  return renderMovie(data);
};

export default MovieList;

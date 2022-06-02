import RatingChip from "./../components/ratingChip";

const MovieList = ({ data }) => {
  return (
    <div className="list-container">
      <div
        className="movie-container"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 48.44%, rgba(0, 0, 0, 0.8) 100%), url(https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg)`,
        }}
      >
        <div className="movie-info">
          <p className="caption-text movie-info-text">2019</p>
          <RatingChip label="4.5" />
        </div>
        <h1 className="headline-text">The Old Guard</h1>
      </div>
      <div
        className="movie-container"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 48.44%, rgba(0, 0, 0, 0.8) 100%), url(https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg)`,
        }}
      >
        <div className="movie-info">
          <p className="caption-text movie-info-text">2019</p>
          <RatingChip label="4.5" />
        </div>
        <h1 className="headline-text">The Old Guard</h1>
      </div>
      <div
        className="movie-container"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 48.44%, rgba(0, 0, 0, 0.8) 100%), url(https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg)`,
        }}
      >
        <div className="movie-info">
          <p className="caption-text movie-info-text">2019</p>
          <RatingChip label="4.5" />
        </div>
        <h1 className="headline-text">The Old Guard</h1>
      </div>
      <div
        className="movie-container"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 48.44%, rgba(0, 0, 0, 0.8) 100%), url(https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg)`,
        }}
      >
        <div className="movie-info">
          <p className="caption-text movie-info-text">2019</p>
          <RatingChip label="4.5" />
        </div>
        <h1 className="headline-text">The Old Guard</h1>
      </div>
    </div>
  );
};

export default MovieList;

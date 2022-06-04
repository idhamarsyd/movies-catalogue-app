import { useSelector } from "react-redux";
import React from "react";
import RatingChip from "./../components/ratingChip";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.movie);

  return (
    <div className="detail-container">
      <img src={detail.Poster} alt="Movie Poster" className="detail-image" />
      <div className="detail-wrapped">
        <button className="button caption-text" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
          Back to Home
        </button>
        <RatingChip label={detail.imdbRating} />
        <h1 className="headline-text">{detail.Title}</h1>
        <div className="detail-small-info">
          <h1 className="caption-text small-info">{detail.Runtime}</h1>
          <h1 className="caption-text small-info">{detail.Genre}</h1>
          <h1 className="caption-text small-info">{detail.Year}</h1>
        </div>
        <p className="body-text">{detail.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;

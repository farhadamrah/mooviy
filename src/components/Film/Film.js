import React from "react";
import "./Film.css";

const Film = ({
  id,
  label,
  date,
  imageUrl,
  imdb,
  director,
  genre,
  actors,
  openModal,
  plot,
  isFavorite,
  handleFavoriteClick,
}) => {
  return (
    <div className="film-container">
      <img
        className="film_img"
        src={imageUrl}
        onClick={() =>
          openModal({
            label,
            date,
            imageUrl,
            imdb,
            director,
            genre,
            actors,
            plot,
          })
        }
      ></img>
      <p className="film_label">{label}</p>
      <p className="film_date">{date}</p>
      <span
        className="film_icon"
        onClick={() => handleFavoriteClick(id, isFavorite)}
      >
        <i class={`${isFavorite ? "fas fa-heart" : "far fa-heart"}`}></i>
      </span>
    </div>
  );
};

export default Film;

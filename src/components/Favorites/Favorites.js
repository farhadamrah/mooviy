import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import Film from "../Film/Film";
import ModalContent from "../Modal/ModalContent";
import "./Favorites.css";

const Favorites = ({
  handleFavoriteClick,
  favoriteFilms,
  label,
  date,
  imageUrl,
  imdb,
  director,
  genre,
  actors,
  plot,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="favorites-film-container">
      <div
        className="favorites-film"
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
      >
        {favoriteFilms.map((favoriteFilm) => (
          <Film
            id={favoriteFilm.id}
            label={favoriteFilm.label}
            date={favoriteFilm.date}
            imageUrl={favoriteFilm.imageUrl}
            imdb={favoriteFilm.imdb}
            director={favoriteFilm.director}
            genre={favoriteFilm.genre}
            actors={favoriteFilm.actors}
            openModal={favoriteFilm.openModal}
            plot={favoriteFilm.plot}
            isFavorite={true}
            handleFavoriteClick={handleFavoriteClick}
            openModal={openModal}
          />
        ))}
      </div>
      <Modal open={isOpen} onClose={closeModal} center>
        <ModalContent content={modalContent} />
      </Modal>
    </div>
  );
};

export default Favorites;

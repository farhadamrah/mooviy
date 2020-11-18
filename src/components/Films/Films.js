import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Film from "../Film/Film";
import ModalContent from "../Modal/ModalContent";
import "./Films.css";

const Films = ({ films, handleFavoriteClick, favorites }) => {
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
    <div className="films">
      {films.map((film) => (
        <Film
          key={film.id}
          id={film.id}
          label={film.label}
          date={film.date}
          imageUrl={film.imageUrl}
          imdb={film.imdb}
          director={film.director}
          genre={film.genre}
          actors={film.actors}
          plot={film.plot}
          openModal={openModal}
          closeModal={closeModal}
          handleFavoriteClick={handleFavoriteClick}
          isFavorite={favorites.find((favorite) => favorite.id === film.id)}
        />
      ))}

      <Modal open={isOpen} onClose={closeModal} center>
        <ModalContent content={modalContent} />
      </Modal>
    </div>
  );
};

export default Films;

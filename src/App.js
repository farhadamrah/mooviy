import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Films from "./components/Films/Films";
import Modal from "react-responsive-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

// static films
import filmsData from "./components/filmsData";

const App = () => {
  const [activeFilms, setActiveFilms] = useState(filmsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFavoriteClick = (id, isFavorite) => {
    let newFavorites;
    // favorites.filter(favorite => favorite.id
    if (isFavorite) {
      newFavorites = favorites.filter((favorite) => favorite.id !== id);
      setFavorites(newFavorites);
    } else {
      newFavorites = [...favorites, activeFilms.find((film) => film.id === id)];
      setFavorites(newFavorites);
    }
  };

  useEffect(() => {
    const results = filmsData.filter((film) =>
      film.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setActiveFilms(results);
  }, [searchTerm]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites"));
    if (favs && favs.length) {
      setFavorites(favs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-container">
          <Navbar
            handleChange={handleChange}
            searchTerm={searchTerm}
            favoritesCount={favorites.length}
          />
          <Switch>
            <Route exact path="/">
              <Films
                films={activeFilms}
                handleFavoriteClick={handleFavoriteClick}
                favorites={favorites}
              />
            </Route>
            <Route exact path="/favorites">
              <Favorites
                handleFavoriteClick={handleFavoriteClick}
                favoriteFilms={favorites}
              />
            </Route>
          </Switch>
        </div>
        <Modal />
      </BrowserRouter>
    </div>
  );
};

export default App;

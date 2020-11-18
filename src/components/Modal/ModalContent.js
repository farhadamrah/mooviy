import React from 'react'
import './ModalContent.css'

const ModalContent = ({ content }) => {
    const { imageUrl, label, imdb, date, director, genre, actors, plot } = content;

    return (
        <div className='modal-container'>
            <div className='modal-image'>
                <img className='modal-image_img' src={imageUrl} alt='modal-img'></img>
            </div>

            <div className='modal-content'>
                <h1>{label}</h1>
                <h2><label>IMDb: </label>{imdb}</h2>
                <p><label>Year: </label> {date} </p>
                <p><label>Director: </label>{director}</p>
                <p><label>Genre: </label>{genre}</p>
                <p><label>Actors: </label>{actors}</p>
                <p><label>Plot: </label>{plot}</p>
            </div>
        </div>
    )
}

export default ModalContent

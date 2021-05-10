import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './MovieCard.css';
import MovieDetails from "./MovieDetails.js";
import closeIcon from "../assets/closeIcon.svg";

function MovieCard(props) {

    const [movie, setMovie] = useState(props.movie);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            <div className="card"
                 onClick={() => setModalIsOpen(true)}
                 style={{backgroundImage: `url(${movie.Poster})`}}>
            </div>
            <div className="text_title">{movie.Title}</div>
            <div className="text_year">{movie.Year}</div>
            <Modal
                className="modal"
                overlayClassName="modal_overlay"
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}>
                <div className="closeModalButton" onClick={closeModal}>
                    <img src={closeIcon}/>
                </div>
                <MovieDetails movieId={movie.imdbID}/>
            </Modal>
        </div>
    );
}

export default MovieCard;

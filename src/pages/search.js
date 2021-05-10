import React, {useCallback, useEffect, useState} from 'react';
import { searchMoviesByName, searchMovieById } from "../api/MovieAPI";
import { MoviesByName, movieById} from "../service/MovieService";
import logo from "../assets/logo.svg";
import MovieCard from "../components/MovieCard";

import './search.css';
import Modal from "react-modal";
import closeIcon from "../assets/closeIcon.svg";
import NomineesList from "../components/NomineesList";

function Search() {
    const firstPage = 1
    const secondPage = 2

    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(firstPage)
    const [nextPage, setNextPage] = useState(secondPage)
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        const movieSearch = searchMoviesByName(input, firstPage)
            .then(response => {
                if (response.data.Response !== "False") {
                    const moviesList = response.data.Search;
                    setMovies([])
                    setMovies(moviesList);
                    setCurrentPage(1)
                }
                else {
                     setMovies([])
                }
            })
            .catch(error => console.log(error));
        }, [input]);

    const loadMoreMovies = () => {
        const movieSearch = searchMoviesByName(input, nextPage)
            .then(response => {
                if (response.data.Response !== "False") {
                    const newMoviesList = movies.concat(response.data.Search);
                    setMovies(newMoviesList);
                }
            })
            .catch(error => console.log(error));
        const next = nextPage + 1
        setNextPage(next)
    }

    const renderLoadMoreButton = () => {
        if (movies.length > 0) {
            return <button onClick={loadMoreMovies} className="button">Load More</button>;
        }
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    return (
        <div className="search">
            <div className="search_container">
                <div className="nomination_button_container">
                    <button onClick={() => setModalIsOpen(true)} className="nomination_button">
                        Your Nominations
                    </button>
                </div>
                <div className="search_container_logo">
                    <img className="search_container_logo_img" src={logo} alt="logo" />
                </div>
                <div className="search_container_textInput">
                    <input
                        type="text"
                        className="search_container_textInput_input"
                        placeholder="Search movie"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}/>
                </div>
                <div className="search_container_movielist">
                    {movies.map(( movie, index) => {
                        return (
                            <MovieCard movie={movie} key={index}/>
                        )})}
                </div>
                <div className="search_container_button">
                    {renderLoadMoreButton()}
                </div>
                <Modal
                    className="modal"
                    overlayClassName="modal_overlay"
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={closeModal}>
                    <div className="closeModalButton" onClick={closeModal}>
                        <img src={closeIcon}/>
                    </div>
                    <NomineesList/>
                </Modal>
            </div>
        </div>
    );
}

export default Search;

import React, {useEffect, useState} from 'react';
import './MovieDetails.css';
import { searchMovieById } from "../api/MovieAPI";
import { getNominations, addNominations}from "../helpers/LocalStorage"

function MovieDetails(props) {
    const [movieDetails, setMovieDetails] = useState("");
    const [movieId, setMovieId] = useState(props.movieId);
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Nominate");

    useEffect(() => {
        (async () => {
            const nominationsList = await getNominations()
            if (nominationsList !== null) {
                if ((nominationsList.find(nominationId => nominationId === movieId)) !== undefined) {
                    setIsDisabled(true)
                    setButtonText("Already Nominated")
                } else if (nominationsList.length === 5){
                    setIsDisabled(true)
                    setButtonText("Limit of nominations")
                }

            }
        })()
    }, [])

    useEffect(() => {
        searchMovieById(movieId)
            .then(response => {
                if (response.data.Response !== "False") {
                    setMovieDetails(response.data)
                }
            })
            .catch(error => console.log(error));
    }, []);


    const nominateMovie = () => {
        addNominations(movieId)
        setIsDisabled(true)
        setButtonText("Already Nominated")
    }

    return (
        <div>
            <div className="title">{movieDetails.Title}</div>
            <div className="container">
                <div className="poster"
                     style={{backgroundImage: `url(${movieDetails.Poster})`}}>
                </div>
                <div className="details_container">
                    <div className="plot">{movieDetails.Plot}</div>
                    <div className="genre">{movieDetails.Genre}</div>
                    <div className="year">{movieDetails.Year}</div>
                </div>
            </div>
            <div className="button_container">
                <button disabled={isDisabled} onClick={nominateMovie} className="button">{buttonText}</button>
            </div>
        </div>
    );
}

export default MovieDetails;

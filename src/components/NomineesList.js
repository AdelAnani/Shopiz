import React, {useEffect, useState} from 'react';
import './NomineesList.css';
import { searchMovieById } from "../api/MovieAPI";
import { getNominations, deleteNomination }from "../helpers/LocalStorage"
import NomineeCard from "./NomineeCard";
import MovieCard from "./MovieCard";

function NomineesList() {
    const [movies, setMovies] = useState([]);

    const deleteMovie = async (imdbID, index) => {
        await deleteNomination(imdbID)
        getMoviesNomidated()
    }

    useEffect(() => {
        (async () => {
            await getMoviesNomidated()
        })()
    }, [])

    const getMoviesNomidated = async () => {
        const nominationList = [];
        const nominationsIdList = await getNominations();
        if (nominationsIdList !== null) {
            for (let i = 0; i < nominationsIdList.length; i++) {
                await searchMovieById(nominationsIdList[i])
                    .then(response => {
                        if (response.data.Response !== "False") {
                            nominationList.push(response.data)
                            console.log(response.data)
                        }
                    })
                    .catch(error => console.log(error))
            }
        }
        setMovies(nominationList)
    }

    const fetchNominationsList = async () => {
        const nominationList = [];
        const nominationsIdList = getNominations();
        for (var i = 0; i < nominationsIdList.length; i++) {
            await searchMovieById(nominationsIdList[i])
                .then(response => {
                    if (response.data.Response !== "False") {
                        nominationList.push(response.data)
                        console.log(response.data)
                    }
                })
                .catch(error => console.log(error))
        }
        return nominationList
    }

    return (
        <div>
            <div className="title">Your Nominations</div>
            <div className="movielist">
                {movies.map((movie, index) => {
                    return <NomineeCard movie={movie} key={index} deleteMovie={deleteMovie}/>
                })}
            </div>
        </div>
    );
}

export default NomineesList;

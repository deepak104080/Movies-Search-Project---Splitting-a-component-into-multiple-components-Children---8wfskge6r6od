import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        
        const filteredResult = movies.filter((item) => {
            return item.title.toLowerCase() === inputValue.toLowerCase();
        })

        const filterMovieList = filteredResult.map((item) => {
            return item.title
        })

        setResult(filterMovieList);

    }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    // useEffect(() => {
    //     console.log('inputValue - ', inputValue);
    //     console.log('results - ', results);
    // })

    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie) => (
                        <div className="movie">{movie}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;

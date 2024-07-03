

// import React, { useEffect, useState } from 'react'
// import axios from "../Utilies/axios"
// import requests from '../Utilies/requests';


// const Row = ({title,fetchUrl}) => {
//     const [movies, setMovies] = useState([]);
//     useEffect(()=>{
//       (async ()=>{
//         const request= await axios.get(requests.fetchNetflixOriginals)
//         console.log(request)
//       })()
//     },[]);
//   return (
//     <div>
//       <h2>{title}</h2>
//     </div>
//   )
// }

// export default Row


// src/components/Row.js
import React, { useState, useEffect } from 'react';
import axios from '../utilities/axios'; // Make sure to set up axios to have the base URL
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request)
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;



import React from 'react';
import { useState, useEffect } from 'react';
import { getDocs, doc } from 'firebase/firestore';
import { moviesCollRef } from '../lib/firestore.collection';
import { db } from '../lib/init-firebase';
import { deleteDoc } from '@firebase/firestore';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function deleteMovie(id) {
    if (id === '') return console.log('id can not be empty');
    const docRef = doc(db, 'movies', id);
    deleteDoc(docRef)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }

  function getMovies() {
    getDocs(moviesCollRef)
      .then((res) => {
        const moviesData = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMovies(moviesData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <h4>ListMovies : </h4>
      <button onClick={() => getMovies()}>Refresh Movies</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id} ------- {movie.data.name}
            <button
              onClick={() => {
                deleteMovie(movie.id);
              }}
            >
              🗑 😭
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;

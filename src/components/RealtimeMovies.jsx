import React from 'react';
import { useState, useEffect } from 'react';
import { onSnapshot, doc, deleteDoc } from '@firebase/firestore';
import { moviesCollRef } from '../lib/firestore.collection';

const RealtimeMovies = () => {
  const [movies, setMovies] = useState('');

  function deleteMovie(id){
    if (id === '') return console.log('id can not be empty');
    const docRef = doc(moviesCollRef, id);
    deleteDoc(docRef)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {

    const unsubscribe = onSnapshot(moviesCollRef, snapshot => {
        setMovies(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    })

    return () => {
        unsubscribe()
    };
  }, []);

  return (
    <div>
      <h4>Realtime Updating Movies : </h4>
      <ul>
        {movies && movies.map(movie => (<li key={movie.id}>{movie.data.name}</li>))}
      </ul>
    </div>
  );
};

export default RealtimeMovies;

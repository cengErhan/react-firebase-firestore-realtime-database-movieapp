import { useState } from 'react';

import React from 'react';
import { doc, deleteDoc } from '@firebase/firestore';
import { moviesCollRef } from '../lib/firestore.collection';

const DeleteMovie = () => {
  const [id, setId] = useState('');

  function deleteMovie(e) {
    e.preventDefault();
    if (id === '') return console.log('id can not be emoty');
    const docRef = doc(moviesCollRef, id);
    deleteDoc(docRef)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <h4>Delete Movie : </h4>
      <form onSubmit={deleteMovie}>
        <label htmlFor='id'>Movie Id : </label>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <button type='submit'>Delete Movie</button>
      </form>
    </div>
  );
};

export default DeleteMovie;

import React from 'react';
import { addDoc } from '@firebase/firestore';
import { useState } from 'react';
import { moviesCollRef } from '../lib/firestore.collection';

const AddMovie = () => {
  const [name, setName] = useState('');

  function sendMovie(e) {
    e.preventDefault();
    if (name === '') return alert('name of movie can not be empty');
    addDoc(moviesCollRef, { name })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <h4>Add Movie : </h4>
      <form onSubmit={sendMovie}>
        <label htmlFor='name'>Movie Name </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

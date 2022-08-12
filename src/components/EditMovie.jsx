import React from 'react';
import { useState } from 'react';
import { db } from '../lib/init-firebase';
//import { updateDoc } from '@firebase/firestore'; 
import { doc, setDoc } from '@firebase/firestore';

const EditMovie = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  function updateMovie(e) {
    e.preventDefault();
    if (name === '') return alert('name of movie cannot be empty');
    if (id === '') return alert('name of movie cannot be empty');

    const docRef = doc(db, 'movies', id);
    setDoc(docRef, { name })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));

    // updateDoc(docRef, { name })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <h4>Edit Movie : </h4>
      <form onSubmit={updateMovie}>
        <label htmlFor='name'>Movie Name </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor='id'>Movie Id : </label>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <button type='submit'>Edit Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;

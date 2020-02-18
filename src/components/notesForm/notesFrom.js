import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const NotesForm = () => {
  const history = useHistory();
  const [notesName, setNotesName] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    return fetch('https://cors-anywhere.herokuapp.com/https://noteymcnoteface.herokuapp.com/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify({
        title: notesName,
        text: note, 
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if(!ok) throw json;
        return json;
      })
      .then(() => {
        history.replace('/');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={notesName} placeholder="Title" onChange={({ target }) => setNotesName(target.value)}/>
      <textarea type="textarea" value={note} placeholder="note" onChange={({ target }) => setNote(target.value)}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default NotesForm;

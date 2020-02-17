import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const NotesForm = () => {
  const history = useHistory();
  const [notesName, setNotesName] = useState('');
  const [note, setNote] = useState('');


  
  const handleSubmit = event => {
    event.preventDefault();
    return fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify({
        title: notesName,
        note: note, 
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
      <input type="text" value={notesName} onChange={({ target }) => setNotesName(target.value)}/>
      <input type="text" value={note} onChange={({ target }) => setNote(target.value)}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default NotesForm;

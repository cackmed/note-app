import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNotesById } from '../../hooks/getNotesById';

const EditForm = ({ match }) => {
  const history = useHistory();
  const { noteDetail, loading } = 
  useNotesById(match.params.id);
  const [notesName, setNotesName] = useState('');
  const [note, setNote] = useState('');
 
  const handleSubmit = event => {
    event.preventDefault();
    return fetch(`https://cors-anywhere.herokuapp.com/https://noteymcnoteface.herokuapp.com/api/v1/notes/${match.params.id}`, {
      method: 'PATCH',
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

  if(loading)
    return (
      <h1>Currently Loading</h1> 
    );

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" value={notesName} placeholder={noteDetail.title} onChange={({ target }) => setNotesName(target.value)}/>

      <textarea type="text" value={note} placeholder={noteDetail.text} onChange={({ target }) => setNote(target.value)}/>

      <input type="submit" value="Submit"/>
    </form>
  );
};

EditForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default EditForm;

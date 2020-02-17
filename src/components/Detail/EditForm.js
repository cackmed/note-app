import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'''
import { useNotesById } from '../../hooks/getNotesById';



const EditForm = ({ match }) => {
  const history = useHistory();
  const { noteDetail } = 
  useNotesById(match.params.note_id);
  const [setNotesName] = useState();
  const [setNote] = useState();


  
  const handleSubmit = event => {
    event.preventDefault();
    return fetch('', {
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
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={noteDetail.title} onChange={({ target }) => setNotesName(target.value)}/>
      <input type="text" value={noteDetail.text} onChange={({ target }) => setNote(target.value)}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

EditForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      note_id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default EditForm;

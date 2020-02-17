import React from 'react';
import PropTypes from 'prop-types';
import { useNotesById } from '../../hooks/getNotesById';
import { useHistory } from 'react-router-dom';
import EditForm from './EditForm';

const NotesDetail = ({ match }) => {
  const history = useHistory();
  const { noteDetail, loading } = 
  useNotesById(match.params.note_id);

  const renderEdit = () => {
    return (
      <EditForm />
    );
  };

  const handleDelete = event => {
    return fetch('', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      }
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
    <article key={noteDetail._id}>
      <h2>{noteDetail.title}</h2>
      <p>{noteDetail.text}</p>
      <button onClick={renderEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

NotesDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      note_id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default NotesDetail;


import React from 'react';
import PropTypes from 'prop-types';
import { useNotesById } from '../../hooks/getNotesById';
import { useHistory, Link } from 'react-router-dom';

const NotesDetail = ({ match }) => {
  const history = useHistory();
  const { noteDetail, loading } = 
  useNotesById(match.params.id);

  const handleDelete = event => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://noteymcnoteface.herokuapp.com/api/v1/notes/${match.params.id}`, {
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
      <Link to={`/editForm/${noteDetail._id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

NotesDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default NotesDetail;

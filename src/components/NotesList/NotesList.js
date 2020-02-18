import React from 'react';
import { useNotes } from '../../hooks/getNotes';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const { notes, loading } = useNotes();

  if(loading)
    return (
      <h1>Currently Loading</h1> 
    );

  const notesElements = notes.map(note => {
    return (
      <Link key={note._id} to = {`/notesDetail/${note._id}`}>
        <article>
          <h3>{note.title}</h3>
        </article>
      </Link>
    );
  });
  return <ul>
    {notesElements}
  </ul>;
};

export default NotesList;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import notesForm from '../components/notesForm';
import Nav from '../components/Nav/Nav';
import NotesDetail from '../components/Detail/NotesDetail';
import NotesList from '../components/NotesList/NotesList';


export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path ='/' component={NotesList} />
        <Route path='/notesDetail/:notes_id' component={NotesDetail} />
        <Route path='/notesForm' component={notesForm} />
        {/* <Route Auth path='/auth' component={Auth} /> */}
      </Router>
    </>
  );
}

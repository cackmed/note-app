import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotesForm from '../components/NotesForm/NotesFrom';
import Nav from '../components/Nav/Nav';
import NotesDetail from '../components/Detail/NotesDetail';
import NotesList from '../components/NotesList/NotesList';
import EditForm from '../components/Detail/EditForm';


export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path ='/' component={NotesList} />
        <Route path='/notesDetail/:id' component={NotesDetail} />
        <Route path='/editForm/:id' component={EditForm} />
        <Route exact path='/notesForm' component={NotesForm} />
        {/* <Route Auth path='/auth' component={Auth} /> */}
      </Router>
    </>
  );
}

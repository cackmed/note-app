import { useState, useEffect } from 'react';
import { getNotes } from '../services/fetchNotes';

export const useNotes = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
      .then(resObject => {
        setNotes(resObject);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, notes };
};

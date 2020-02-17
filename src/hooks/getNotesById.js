import { useState, useEffect } from 'react';
import { getNotesById } from '../services/fetchNotesById';

export const useNotesById = id => {
  const [loading, setLoading] = useState(true);
  const [notesDetail, setNotesDetail] = useState({});

  useEffect(() => {
    setLoading(true);
    getNotesById(id)
      .then(resObject => {
        setNotesDetail(resObject);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, notesDetail };
};

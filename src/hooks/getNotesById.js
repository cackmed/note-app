import { useState, useEffect } from 'react';
import { fetchNotesById } from '../services/fetchNotesById';

export const useNotesById = id => {
  const [loading, setLoading] = useState(true);
  const [noteDetail, setNoteDetail] = useState({});

  useEffect(() => {
    setLoading(true);
    fetchNotesById(id)
      .then(resObject => {
        setNoteDetail(resObject);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, noteDetail };
};

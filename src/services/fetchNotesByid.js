export const fetchNotesById = id => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://noteymcnoteface.herokuapp.com/api/v1/notes/${id}`,
    {
      headers: {
        origin: null
      }
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};

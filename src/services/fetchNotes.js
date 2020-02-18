export const getNotes = () => {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://noteymcnoteface.herokuapp.com/api/v1/notes/',
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

export const getNotesById = id => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/${id}`,
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

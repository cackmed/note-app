export const getNotes = () => {
  return fetch(
    'https://cors-anywhere.herokuapp.com/',
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

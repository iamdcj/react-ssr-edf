import "isomorphic-fetch";

const fetchComposition = (request: any) => {
  return fetch("https://partnership-site-api.sjp.co.uk/page/why-choose-us")
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(({ message }) => {
      throw Error(message);
    });
};

export default fetchComposition;

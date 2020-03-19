import "isomorphic-fetch";

const fetchPageData = request => {
  return fetch("https://partnership-site-api.sjp.co.uk/page/why-choose-us")
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(({ message }) => {
      throw Error(message);
    });
};

export default fetchPageData;

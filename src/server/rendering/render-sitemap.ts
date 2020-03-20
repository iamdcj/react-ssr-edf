const renderSitemap = res => {
  if (!res) {
    throw Error("No response");
  }

  const endpoint = "";

  if (!endpoint) {
    throw Error("No response");
  }

  fetch("")
    .then(({ data }) => {
      res.set("content-Type", "application/xml");
      res.send(data);
    })
    .catch(error => console.error(error));
};

export { renderSitemap };

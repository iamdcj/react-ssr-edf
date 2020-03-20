import express from "express";

const renderSitemap = (res: express.Response) => {
  if (!res) {
    throw Error("No response");
  }

  const endpoint = "";

  if (!endpoint) {
    throw Error("No response");
  }

  fetch("")
    .then(response => response.json())
    .then(data => {
      res.set("content-Type", "application/xml");
      res.send(data);
    })
    .catch(error => console.error(error));
};

export { renderSitemap };

export const createMarkup = htmlString => ({
  __html: htmlString
});

export const ShareLinks = (
  type = "",
  page = "",
  title = "",
  categories = "",
  summary = ""
) => {
  switch (type) {
    case "facebook":
      return page ? `https://www.facebook.com/sharer.php?u=${page}` : "";
    case "twitter":
      return page
        ? `https://twitter.com/intent/tweet?url=${page}${title &&
            `&text=${title}`}${categories && `&hashtags=${categories}`}`
        : "";
    case "linkedin":
      return page
        ? `https://www.linkedin.com/shareArticle?mini=true&url=${page}${title &&
            `&title=${title}`}${summary && `&summary=${summary}`}`
        : "";
    default:
      return null;
  }
};

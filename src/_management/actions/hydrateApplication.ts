import fetchPageData from "./fetchComposition";

export const hydrateApplication = (request: any) => {
  return fetchPageData(request);
};

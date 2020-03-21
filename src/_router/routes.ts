import App from "../client/App";

import fetchComposition from "_management/actions/fetchComposition";

export default [
  {
    path: "*",
    component: App,
    fetchComposition
  }
];

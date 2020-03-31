import { Dispatch } from "redux";
import { actionHelper } from "./actions/action-helper";
import { fetchComposition } from "./action-creators/hydration/fetchComposition";

export const hydrateApplication = (res: any, req: any): any => (
  dispatch: Dispatch
) => {
  dispatch(actionHelper("APP", "LOADING", true));

  return dispatch(fetchComposition(res, req)).finally(() => {
    dispatch(actionHelper("APP", "LOADING", false));
  });
};

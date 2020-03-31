import { actionHelper } from "../../actions/action-helper";
import { ThunkResult } from "../../store.tsjs";
import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import { API_BASE } from "../../../_constants";
import { Request, Response } from "../../../_types";

import { regions } from "./test";

export const fetchComposition = (res: Response, req: Request) => (
  dispatch: Dispatch,
  _: any,
  API: (args: any) => Promise<any>
): Promise<any> => {
  const requestConfig = {
    url: `https://jsonplaceholder.typicode.com/todos/1`
  };

  return API(requestConfig)
    .then((response: AxiosResponse) => {
      if (!response.data) {
        throw Error("COULD NOT FETCH COMPOSITION DATA");
      }
      dispatch(actionHelper("COMPOSITION", "REGIONS", regions));
    })
    .catch((error: Error) => {
      throw Error(error.message);
    });
};

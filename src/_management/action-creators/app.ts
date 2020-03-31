import { Dispatch } from "redux";

import { actionHelper } from "_management/actions/action-helper";

export const applicationLoading = (bool: boolean) => (dispatch: Dispatch) =>
  dispatch(actionHelper("app", "loading", bool));

export const toggleMenu = (bool: boolean) => (dispatch: Dispatch) =>
  dispatch(actionHelper("menu", "active", bool));

export const toggleFooterVisiblity = (bool: boolean) => (dispatch: Dispatch) =>
  dispatch(actionHelper("footer", "visible", bool));

export const polyfillsReady = (bool: boolean) => (dispatch: Dispatch) =>
  dispatch(actionHelper("polyfills", "loaded", bool));

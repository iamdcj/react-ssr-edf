import { actionTypes } from "../actions/types";

interface LoadingAction {
  type: string;
  loading: boolean;
}

function loading(state = false, action: LoadingAction) {
  switch (action.type) {
    case actionTypes.application.loading:
      return action.loading;
    default:
      return state;
  }
}

interface StatusAction {
  type: string;
  status: any;
}

function status(state = {}, action: StatusAction) {
  switch (action.type) {
    case actionTypes.application.status:
      return { ...state, ...action.status };
    default:
      return state;
  }
}

interface MenuActiveAction {
  type: string;
  active: boolean;
}

function menuActive(state = false, action: MenuActiveAction) {
  switch (action.type) {
    case actionTypes.application.menuActive:
      return action.active;
    default:
      return state;
  }
}

interface FooterVisibleAction {
  type: string;
  visible: boolean;
}

function footerVisible(state = false, action: FooterVisibleAction) {
  switch (action.type) {
    case actionTypes.application.footerVisible:
      return action.visible;
    default:
      return state;
  }
}

interface PolyfillsLoadedAction {
  type: string;
  loaded: boolean;
}

function polyfillsLoaded(state = false, action: PolyfillsLoadedAction) {
  switch (action.type) {
    case actionTypes.application.polyfillsLoaded:
      return action.loaded;
    default:
      return state;
  }
}

export default {
  loading,
  status,
  menuActive,
  footerVisible,
  polyfillsLoaded
};

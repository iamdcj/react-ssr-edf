import { combineReducers } from "redux";

import application from "./appReducers";
import composition from "./compositionReducers";

export default combineReducers({
  application: combineReducers(application),
  composition
});

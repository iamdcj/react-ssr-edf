import { actionTypes } from "../actions/types";
import { combineReducers } from "redux";

import { Region, Template } from "../../_types";

interface TemplateAction {
  type: string;
  template: Template;
}

function template(state = {}, action: TemplateAction) {
  switch (action.type) {
    case actionTypes.composition.template:
      return action.template;
    default:
      return state;
  }
}

interface InfoAction {
  type: string;
  info: any;
}
function info(state = {}, action: InfoAction) {
  switch (action.type) {
    case actionTypes.composition.info:
      return action.info;
    default:
      return state;
  }
}
interface MetadataAction {
  type: string;
  metadata: any;
}

function metadata(state = {}, action: MetadataAction) {
  switch (action.type) {
    case actionTypes.composition.metadata:
      return action.metadata;
    default:
      return state;
  }
}

interface RegionAction {
  type: string;
  regions: Region[];
}

function regions(state = [], action: RegionAction) {
  switch (action.type) {
    case actionTypes.composition.regions:
      return action.regions;
    default:
      return state;
  }
}

const compositionReducer = combineReducers({
  template,
  info,
  metadata,
  regions
});

export default compositionReducer;

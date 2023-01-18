import { combineReducers } from "@reduxjs/toolkit";
import fieldsReducer from "./fieldsSlice";

export const rootReducer = combineReducers({
  fields: fieldsReducer,
});

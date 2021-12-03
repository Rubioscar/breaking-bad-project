import { ADD_BREAD_CRUMB, SET_BREAD_CRUMB } from "./index";

export const addBreadCrumb = (value) => ({
  type: ADD_BREAD_CRUMB,
  payload: { value },
});

export const setBreadCrumb = (value) => ({
  type: SET_BREAD_CRUMB,
  payload: { value },
});

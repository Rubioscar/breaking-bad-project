import { ADD_BREAD_CRUMB, SET_BREAD_CRUMB } from "../actions/index";

const initialState = [];

const check = (state, item) => {
  const index = state.findIndex((element) => element.path === item.path);
  if (index === -1) {
    return [...state, item];
  }
  return [...state.slice(0, index), item];
};

const BreadCrumbs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BREAD_CRUMB:
      return check(state, action.payload.value);
    case SET_BREAD_CRUMB:
      return [action.payload.value];

    default:
      return state;
  }
};

export default BreadCrumbs;

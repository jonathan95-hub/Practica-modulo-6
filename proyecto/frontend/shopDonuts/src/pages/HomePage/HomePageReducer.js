import { CHANGE_MENU } from "./HomePageAction";

const initialState = {
  menuOption: 0,
};

const menuReducer = (state = initialState, action) => {
  if (action.type === CHANGE_MENU) {
    return {
      ...state,
      menuOption: action.payload,
    };
  } else {
    return state;
  }
};

export default menuReducer;

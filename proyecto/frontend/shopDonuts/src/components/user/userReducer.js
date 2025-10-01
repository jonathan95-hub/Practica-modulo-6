import { LOGIN, LOAD_INFO_USER } from "./userAction";

const initialState = {
  user: undefined,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
      };
    case LOAD_INFO_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
 export default userReducer
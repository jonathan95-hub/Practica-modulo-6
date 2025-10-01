export const IS_LOGIN = "IS_LOGIN";
export const LOG_OUT = "LOG_OUT";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const loginR = (payload) => {
  return {
    type: IS_LOGIN,
    payload,
  };
};

export const logOut = (payload) => {
  return {
    type: LOG_OUT,
    payload,
  };
};

export const add = (id) => {
  return {
    type: ADD_FAV,
    payload: id,
  };
};
export const remove = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

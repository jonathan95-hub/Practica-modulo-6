export const LOGIN = "LOGIN";
export const LOAD_INFO_USER = "LOAD_INFO_USER";

export const doLoginAction = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

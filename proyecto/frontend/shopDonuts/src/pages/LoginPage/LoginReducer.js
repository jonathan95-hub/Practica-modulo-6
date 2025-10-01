import { LOG_OUT, IS_LOGIN, ADD_FAV, REMOVE_FAV } from "./LoginAction";

const initialState = {
  isLogued: false,
  user:{id: null,
    name: "",
    email: "",
    favoritesDonuts: []
  } // no hay usuario inicialmente
 
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_LOGIN:
      return {
        ...state,
        isLogued: true, // cambia el estado a true entonces asi podemos cambiar al otro modo donde se ve el layaout en
        user: payload.user,
        favoritesDonuts: payload.favoritesDonuts || [] // guarda los datos del usuario en redux y asi se pueden usar en otra parte
      };
    case LOG_OUT:
      return {
        ...state,
        isLogued: false,
        user: null, // al cerrar sesion no hace falta guardar los datos del usuario
        favoritesDonuts:[]
      };
    case ADD_FAV:
      return {
        ...state,
        user: {
          ...state.user,
          favoritesDonuts: [...state.user?.favoritesDonuts || [], payload]
        },
      };
    case REMOVE_FAV:
      return {
        ...state,
       user: {
          ...state.user,
          favoritesDonuts: (state.user?.favoritesDonuts || []).filter(
            (favId) => favId !== payload
          )
        }
      };
    default:
      return state;
  }
};

export default loginReducer;

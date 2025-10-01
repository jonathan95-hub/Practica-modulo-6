import React, { useEffect, useState } from "react";
import { doLoginFetch, registerUserFetch } from "../../core/services/userFetch";
import { useDispatch, useSelector } from "react-redux";
import { doLoginAction } from "../../components/user/userAction";
import { useNavigate } from "react-router-dom";
import { loginR } from "./LoginAction";
import { changeMenuOption } from "../HomePage/HomePageAction";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // traemos el useDispatch
  const [isRegister, setIsRegister] = useState(false); // variable de estado para difertenciar si es login o registro
  const [login, setLogin] = useState({ email: "", password: "" }); // variable para el login, se pone el email y la contraseñar en vacio para definirlos y luego usarlo junto al dispatch
  const [registerData, setRegisterData] = useState({
    // variable con todos los campos de registro que inicialmente estan vacios
    name: "",
    email: "",
    password: "",
    city: "",
    numberPhone: "",
    role: "",
  });

  const backToLogin = () => {
    // funcion oara volver al login
    setRegisterData({
      // seteamos para borrar los campos de registro
      name: "",
      email: "",
      password: "",
      city: "",
      numberPhone: "",
    });
    setIsRegister(false); // ponemos la variable en false y asi volvemos al login
  };

  const goToRegister = () => {
    // esta función es para ir a registro
    setLogin({
      email: "", // setea los valores de email y password de login a "" para limpiar
      password: "",
    });
    setIsRegister(true); // setea el isRegister en true y asi nos lleva al formulario de registro
  };

  const doLogin = async () => {
    // funcion que envia los datos del usuario al loguear
    if (login.email === "" || login.password === "") {
      alert("No se admiten campos vacios");
      return;
    }
    const Info = await doLoginFetch(login.email, login.password); // usamos la funcion que hace la llamda al back pasandole el email y el password con login delante para que coja los cmapos de la variable de estado
    console.log("Info", Info);
    dispatch(
      // usamos el dispatch para activar la accion de doLoginAction con la constate Info como parametro
      doLoginAction(Info)
    );
    dispatch(loginR(Info));
    dispatch(changeMenuOption(0));
    navigate("/home"); // navigate de react-router para navegar entre paginas no es necesario pasarle mas parametros pues la informacion del usuario ya esta guardada en redux
  };

  const registeruser = async () => {
    const info = await registerUserFetch(registerData); // le pasamos los campos de registerdata para reflejar los datos y enviarselos al back sin registerData no hay argumentos que enviar
    dispatch(doLoginAction(info), alert("Usuario Registrado"), backToLogin()); // hacemos un dispatch con doLoginAction seguido un alert y luego llamamos a funcion para volver al login
  };

  const inputHandler = (name, value) => {
    // ponemos de parametro name y value para que sea dinamico  y la podamos usar en los dos input de login
    const userAux = {
      // creamos una constante que hace una copia de login para trabajar sobre ella
      ...login,
      [name]: value,
    };
    setLogin(userAux); // seteamos login con el parametro userAux que se hace anteriormente
  };
  const registerInputHandler = (name, value) => {  // mismo funcionamiento que la anterior pero para registro
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };
  useEffect(() => {
    document.body.classList.add("rootL"); // añadimos la clase rootL
    document.body.classList.remove("rootHome"); // eliminamos la clase root Home
  });

  return (
    <>
      {isRegister ? ( // si isRegister es true sladra el formulario de registro si es false saldra el login
        <>
          <div>
            <h1 className="titleRegister"> registro</h1>
          </div>
          <div className="form">
            <h3 className="h3FormRegister">Indique sus datos</h3>
            <div className="formRegister">
              <div>
                <span>Nombre: </span>
                <input
                  className="inputLogin"
                  type="text"
                  name="name"
                  value={registerData.name}
                  onChange={(e) =>
                    registerInputHandler(e.target.name, e.target.value)
                  }
                />
              </div>
              <div>
                <span>Email: </span>
                <input
                  className="inputLogin"
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={(e) =>
                    registerInputHandler(e.target.name, e.target.value)
                  }
                />
              </div>
              <div>
                <span>Contraseña: </span>
                <input
                  className="inputLogin"
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={(e) =>
                    registerInputHandler(e.target.name, e.target.value)
                  }
                />
              </div>
              <div>
                <span>Ciudad: </span>
                <input
                  className="inputLogin"
                  type="text"
                  name="city"
                  value={registerData.city}
                  onChange={(e) =>
                    registerInputHandler(e.target.name, e.target.value)
                  }
                />
              </div>
              <div>
                <span>Teléfono: </span>
                <input
                  className="inputLogin"
                  type="text"
                  name="numberPhone"
                  value={registerData.numberPhone}
                  onChange={(e) =>
                    registerInputHandler(e.target.name, e.target.value)
                  }
                />
              </div>
            </div>
            <div className="containerButtonRegister">
              <div>
                <button className="buttonFormRegister" onClick={registeruser}>
                  Registrar
                </button>
              </div>
              <div>
                <button className="buttonFormRegister" onClick={backToLogin}>
                  Volver
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <h1 className="titleLoginPage">Bienvenido</h1>
            </div>

            <div className="form">
              <h2 className="h3FormRegister">Login</h2>
              <div>
                <div>
                  <span>Email: </span>
                  <input
                    className="inputLogin"
                    placeholder="Indique su email"
                    type="email"
                    name="email"
                    value={login.email}
                    onChange={(e) =>
                      inputHandler(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div>
                  <span>Contraseña: </span>
                  <input
                    className="inputLogin"
                    style={{ marginInlineEnd: "40px" }}
                    placeholder="Indique su contraseña"
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={(e) =>
                      inputHandler(e.target.name, e.target.value)
                    }
                  />{" "}
                  {/* este input tiene el estilo aqui por que era mas sencillo ponerlo directamente */}
                </div>
              </div>

              <div>
                <div>
                  <button onClick={doLogin} className="buttonLogin">
                    Acceder
                  </button>
                </div>
                <div>
                  ¿No tienes cuenta?{" "}
                  <button className="buttonGoRegister" onClick={goToRegister}>
                    Registrate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginPage;

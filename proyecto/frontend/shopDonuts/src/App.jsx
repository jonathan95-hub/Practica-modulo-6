import "@fontsource/frijole";
import "./App.css";
import store from "./core/redux/store/store";
import { Provider } from "react-redux";
import OwnRouter from "./core/router/OwnRouter";
import { BrowserRouter } from "react-router-dom"; // Importante importar esto de react-router si no no funcionará

function App() {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
          <OwnRouter/> 
      </BrowserRouter>
    </Provider>
      
    </>
  );
}

export default App;

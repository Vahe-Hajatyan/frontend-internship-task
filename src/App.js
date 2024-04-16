import { useSelector } from "react-redux";
import { LoginOrRegister } from "./component/loginOrRegister/";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./app.module.css";
function App() {
  const isAuth = useSelector((state) => state.auth.data);
  console.log(isAuth);
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <div>hi</div> : <LoginOrRegister />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

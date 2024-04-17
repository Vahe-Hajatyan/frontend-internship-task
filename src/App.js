import { useSelector } from "react-redux";
import { LoginOrRegister } from "./page/loginOrRegister/loginOrRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./app.module.css";
import { Home } from "./page/Home/Home";
function App() {
  const isAuth = useSelector((state) => state.auth.data);
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <LoginOrRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

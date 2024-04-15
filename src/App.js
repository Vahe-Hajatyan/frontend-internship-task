import { useSelector } from "react-redux";
import { LoginOrRegister } from "./component/loginOrRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const isAuth = useSelector((state) => state.auth.data);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <div>hi</div> : <LoginOrRegister />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

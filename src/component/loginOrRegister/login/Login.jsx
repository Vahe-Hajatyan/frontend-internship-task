import { useState } from "react";
import style from "../login/login.module.css";
import { useDispatch, useSelector } from "react-redux";
export const LogIn = ({ setPage, title, footerText, action }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.status);

  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");
  const [isEye, setEye] = useState(false);
  const [validation, setValidation] = useState({
    email: " ",
    pas: " ",
  });

  function emailValidation(e) {
    let regex = /^\w+([-_.]?\w+)*@\w+([-_.]?\w+)*(\.\w{2,3})+$/;
    setEmail(e);
    if (regex.test(e)) {
      setValidation({
        ...validation,
        email: true,
      });
    } else {
      setValidation({
        ...validation,
        email: false,
      });
    }
  }

  function pasValidation(e) {
    setPas(e);
    if (e.length >= 8) {
      setValidation({
        ...validation,
        pas: true,
      });
    } else {
      setValidation({
        ...validation,
        pas: false,
      });
    }
  }
  function submit() {
    if (validation.email && validation.pas) {
      dispatch(action({ email, pas }));
    }
  }
  return (
    <div className={style.container}>
      <div className={style.panel}>
        <div className={style.title}>
          <h2>{title}</h2>
          {/* <h2>Create an account</h2> */}
        </div>
        <div className={style.form}>
          <label>
            please enter your email
            <input
              className={!validation.email ? style.invalid : ""}
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => emailValidation(e.target.value)}
            />
            {!validation.email && <p>email is incorrect</p>}
          </label>
          <label>
            please enter your password
            <img src="/img/eye.png" alt="eye" onClick={() => setEye(!isEye)} />
            <input
              className={!validation.pas ? style.invalid : ""}
              value={pas}
              type={isEye ? "text" : "password"}
              placeholder="password"
              onChange={(e) => pasValidation(e.target.value)}
            />
            {!validation.pas && <p>password is incorrect</p>}
          </label>
          {error && <p className={style.authErr}>account is not found</p>}
          <button onClick={() => submit()}>Log In</button>
          <p className={style.signupText}>
            {footerText[0]}{" "}
            <span onClick={() => setPage(`${footerText[1]}`)}>
              {footerText[1]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

import style from "./selectLoginMethod.module.css";
export const SelectLoginMethod = ({ setPage }) => {
  return (
    <div className={style.container}>
      <div className={style.panel}>
        <h2 className={style.title}>select login method</h2>
        <div className={style.btnBlock}>
          <button className={style.login} onClick={() => setPage("log in")}>
            logIn
          </button>
          <button onClick={() => setPage("sign up")}>signUp</button>
        </div>
      </div>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";
import style from "./Header.module.css";
export function Header({ setPage }) {
  const dispatch = useDispatch();
  function Logout() {
    dispatch(logout());
  }
  return (
    <header>
      <div className={style.headerBlock}>
        <div>
          <h2>Logo</h2>
        </div>
        <div className={style.nav}>
          <h2 onClick={() => setPage("posts")}>Posts</h2>
          <h2 onClick={() => setPage("coments")}>Coments</h2>
          <h2 onClick={() => setPage("images")}>Images</h2>
        </div>
        <div>
          <button className={style.logout} onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

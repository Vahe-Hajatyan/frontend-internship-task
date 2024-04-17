// import style from "./Coments.module.css";
import style from "../posts/Posts.module.css";

export function Item({ item }) {
  return (
    <div className={style.item}>
      <p>{item.id}</p>
      <h2 title={item.name}>{item.name}</h2>
      <p title={item.email}>{item.email}</p>
      <p title={item.body}>{item.body}</p>
    </div>
  );
}

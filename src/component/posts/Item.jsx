import style from "./Posts.module.css";
export function Item({item}) {
  return (
    <div className={style.item}>
      <h2 title={item.title}>{item.title}</h2>
      <p title={item.body}>
        {item.body}
      </p>
    </div>
  );
}

import style from "./Images.module.css";

export function Item({ item }) {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={item.thumbnailUrl} alt="img" />
        <p>P{item.title}</p>
      </div>
      <img className={style.bigImg} src={item.url} alt="img" />
    </div>
  );
}

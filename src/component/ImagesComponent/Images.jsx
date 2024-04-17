import { useDispatch, useSelector } from "react-redux";
import { Item } from "./Item";
import style from "./Images.module.css";
import { useEffect } from "react";
import { fetchImages } from "../../redux/slices/posts";
import Loading from "../../img/Loading.svg";

export function Images() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <div className={style.itemsBlock}>
      {status === "pending" ? (
        <img src={Loading} alt="loading" />
      ) : (
        data?.map((item) => <Item item={item} key={item.title} />)
      )}
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { Item } from "./Item";
import style from "./Posts.module.css";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/slices/posts";
import Loading from "../../img/Loading.svg";

export function Posts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchPosts());
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

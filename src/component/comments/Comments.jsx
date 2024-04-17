import React, { useEffect } from "react"; // Import React and useEffect
import { Item } from "./Item";
import style from "../posts/Posts.module.css";
import { fetchComment } from "../../redux/slices/posts";
import Loading from "../../img/Loading.svg";
import { useDispatch, useSelector } from "react-redux";

export function Comments() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchComment());
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

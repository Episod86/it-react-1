import React from "react";

import style from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://avatarko.ru/img/kartinka/33/ochki_anime_devushka_34671.jpg"
        alt="Аватар"
      />
      <div>{props.message}</div>
      <span> like {props.likeCount}</span>
    </div>
  );
};

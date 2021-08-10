import React from "react";

import { ProfileInfo } from "./ProfileInfo";

import style from "./Profile.module.css";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

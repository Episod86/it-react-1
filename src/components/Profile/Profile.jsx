import React from "react";

import { MyPosts } from "./MyPosts";
import { ProfileInfo } from "./ProfileInfo";

import style from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

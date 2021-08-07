import React from "react";

import { MyPosts } from "./MyPosts";
import { ProfileInfo } from "./ProfileInfo";

import style from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

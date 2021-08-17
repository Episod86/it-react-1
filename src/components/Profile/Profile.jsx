import React from "react";

import { ProfileInfo } from "./ProfileInfo";

import style from "./Profile.module.css";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

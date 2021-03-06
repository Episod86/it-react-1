import React from "react";
import { NavLink } from "react-router-dom";

import userPhoto from "../../image/photoUser.png";

import style from "./Users.module.css";

export const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.user}>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="avatar"
              className={style.img}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div className={style.userName}>{user.name}</div>
          <div>{user.status}</div>
        </span>
      </span>
    </div>
  );
};

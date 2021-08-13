import React from "react";
import { NavLink } from "react-router-dom";

import userPhoto from "../../image/photoUser.png";

import style from "./Users.module.css";
import { FollowAPI } from "../../api/api";

const Users = (props) => {
  let url;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>

      {props.users.map((us) => (
        <div key={us.id}>
          <span>
            <div>
              {(url = `/profile/${us.id}`)}
              <NavLink to={url}>
                <img
                  src={us.photos.small != null ? us.photos.small : userPhoto}
                  alt="avatar"
                  className={style.img}
                />
              </NavLink>
            </div>
            <div>
              {us.followed ? (
                <button
                  onClick={() => {
                    FollowAPI.setUnfollow(us.id).then((data) => {
                      if (data.resultCode === 0) {
                        data.unfollow(us.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    FollowAPI.setFollow(us.id).then((data) => {
                      if (data.resultCode === 0) {
                        data.follow(us.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{us.name}</div>
              <div>{us.status}</div>
            </span>
            <span>
              <div>{"us.location.countr"}</div>
              <div>{"us.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

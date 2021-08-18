import React from "react";
import { NavLink } from "react-router-dom";
// import { UsersAPI } from "../../api/api";

import userPhoto from "../../image/photoUser.png";

import style from "./Users.module.css";

const Users = (props) => {
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
              <NavLink to={`/profile/${us.id}`}>
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
                  disabled={props.followingInProgress.some(
                    (id) => id === us.id
                  )}
                  onClick={() => {
                    props.unfollow(us.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === us.id
                  )}
                  onClick={() => {
                    props.follow(us.id);
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

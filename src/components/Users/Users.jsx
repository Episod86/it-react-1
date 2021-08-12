import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import userPhoto from "../../image/photoUser.png";

import style from "./Users.module.css";

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
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${us.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "459ae485-0486-4ece-a32f-b394969a0845",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(us.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    // 459ae485-0486-4ece-a32f-b394969a0845
                    // debugger;
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${us.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "459ae485-0486-4ece-a32f-b394969a0845",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(us.id);
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

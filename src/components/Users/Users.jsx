import axios from "axios";
import React from "react";

import userPhoto from "../../image/photoUser.png";
// import userPhoto from "../../image/photoUser.png";
import style from "./Users.module.css";

export const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <div>
        <button onClick={getUsers}>getUsers</button>
      </div>
      {props.users.map((us) => (
        <div key={us.id}>
          <span>
            <div>
              <img
                src={us.photos.small != null ? us.photos.small : userPhoto}
                alt="avatar"
                className={style.img}
              />
            </div>
            <div>
              {us.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(us.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
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

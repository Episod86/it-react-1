import axios from "axios";
import React from "react";

import userPhoto from "../../image/photoUser.png";

import style from "./Users.module.css";

export class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((us) => (
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
                      this.props.unfollow(us.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(us.id);
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
  }
}

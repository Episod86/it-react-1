
import React from "react";
import axios from "axios";
import userPhoto from "../../image/photoUser.png";

import style from "./Users.module.css";

export class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && style.selectedPage}
                onClick={(e) => {this.onPageChanged(p)}}
              >
                {p}
              </span>
            );
          })}
        </div>

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

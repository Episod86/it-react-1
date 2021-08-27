import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import { Clock } from "../Clock";

import style from "./Header.module.css";

export const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.titleBlock}>
        <img
          src="https://w7.pngwing.com/pngs/795/595/png-transparent-cat-paw-dog-paw-background-pet-paw-black.png"
          alt="logo"
        />
        <div className={style.title}>Social network</div>
        <Clock />
      </div>

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div className={style.loginBlockAuth}>
            <NavLink to={"/profile"}>
              <div className={style.login}>{props.login}</div>
            </NavLink>
            <Button
              type="primary"
              onClick={props.logout}
              className={style.button}
            >
              Log out
            </Button>
          </div>
        ) : (
          <NavLink to={"/login"}>
            <Button type="primary" className={style.button}>
              LOGIN
            </Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

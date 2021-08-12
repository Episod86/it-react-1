import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = (props) => {
  debugger;
  return (
    <div className={style.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiwWCpFc4gAmdCBNs4jdn04D0FyVDS8NtmA&usqp=CAU"
        alt="Логотип"
      />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>LOGIN</NavLink>}
      </div>
    </div>
  );
};

export default Header;

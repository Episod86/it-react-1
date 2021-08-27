import React from "react";
import { NavLink } from "react-router-dom";

import style from "./../Dialogs.module.css";

export const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>
        <span className={style.dialogName}>{props.name}</span>
        <img src={props.avatar} alt="photo" />
      </NavLink>
    </div>
  );
};

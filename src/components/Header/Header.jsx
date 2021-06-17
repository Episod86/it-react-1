import React from "react";

import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiwWCpFc4gAmdCBNs4jdn04D0FyVDS8NtmA&usqp=CAU"
        alt="Логотип"
      />
    </div>
  );
};

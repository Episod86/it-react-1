import React from "react";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

import style from "./Dialogs.module.css";

export const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  let messageElement = props.state.messages.map((mes) => (
    <Message message={mes.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>
      <div className={style.messages}>{messageElement}</div>
    </div>
  );
};

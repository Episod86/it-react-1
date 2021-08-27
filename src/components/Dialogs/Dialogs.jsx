import React from "react";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

import style from "./Dialogs.module.css";
import { Redirect } from "react-router-dom";
import { AddMessageFormRedux } from "./AddMessageFormRedux";

export const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      key={dialog.id}
      avatar={dialog.avatar}
    />
  ));

  let messageElement = state.messages.map((mes) => (
    <Message message={mes.message} key={mes.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <div className={style.dialogs}>
      <div>{dialogsElement}</div>
      <div className={style.messages}>
        <div className={style.dialogsItem}>{messageElement}</div>
        <div className={style.addMessage}>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

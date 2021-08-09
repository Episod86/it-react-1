import React from "react";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

import style from "./Dialogs.module.css";

export const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  let messageElement = state.messages.map((mes) => (
    <Message message={mes.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>

      <div className={style.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

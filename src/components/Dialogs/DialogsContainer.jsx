import React from "react";

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import { StoreContext } from "../../StoreContext";

import { Dialogs } from "./Dialogs";
// import { StoreContext } from "../../../StoreContext";

export const DialogsContainer = (props) => {
  
  return (
    <StoreContext.Consumer >
      {
        (store) => {
          let state = store.getState().dialogsPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          };

          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
          };
          return (
            <Dialogs
              updateNewMessageBody={onNewMessageChange}
              sendMessage={onSendMessageClick}
              dialogsPage={state}
            />)
        }
      }
  </StoreContext.Consumer>)

};

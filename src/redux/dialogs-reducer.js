const UPDATENEWMESAGEBODY = "UPDATE-NEW-MESAGE-BODY";
const SENDMESAGE = "SEND-MESAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATENEWMESAGEBODY:
      state.newMessageBody = action.body;
      return state;
    case SENDMESAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: "4", message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SENDMESAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATENEWMESAGEBODY,
  body: body,
});

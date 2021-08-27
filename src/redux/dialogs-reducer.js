const SEND_MESAGE = "SEND-MESAGE";

const initialState = {
  dialogsData: [
    {
      id: "1",
      name: "Aleksey",
      avatar:
        "https://pm1.narvii.com/6812/898e9a78440c858bbc48429775f70d48a85a2e71v2_hq.jpg",
    },
    {
      id: "2",
      name: "Ivan",
      avatar:
        "https://i.pinimg.com/originals/6e/20/f8/6e20f8caddd62ec456990cbbec2817b7.jpg",
    },
    {
      id: "3",
      name: "Elisey",
      avatar:
        "https://tipik.ru/wp-content/uploads/2019/08/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%BE%D0%B2-010.jpg",
    },
  ],

  messages: [
    {
      id: "1",
      message:
        "The establishment of clear lines of communication makes it easier to keep the different actors fully informed of the process.",
    },
    {
      id: "2",
      message:
        "The binary encoder session is not valid. There was an error decoding a previous message.",
    },
    {
      id: "3",
      message:
        "The binary encoder session is not valid. There was an error decoding a previous message.",
    },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: "4", message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESAGE,
  newMessageBody,
});

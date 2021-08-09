import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "hi", likeCount: 11 },
        { id: "2", message: "first post", likeCount: 15 },
        { id: "3", message: "first33333", likeCount: 1 },
      ],
    },

    dialogsPage: {
      dialogsData: [
        {
          id: "1",
          name: "Aleksey",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU",
        },
        {
          id: "2",
          name: "Ivan",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU",
        },
        {
          id: "3",
          name: "Elisey",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU",
        },
      ],

      messages: [
        { id: "1", message: "hi" },
        { id: "2", message: "hello" },
        { id: "3", message: "yo" },
      ],

      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("Состояние изменено");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
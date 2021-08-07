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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: "3",
        message: postMessage,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    }
  },
};

export default store;

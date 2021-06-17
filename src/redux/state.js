let state = {
  profilePage: {
    posts: [
      { id: "1", message: "hi", likeCount: 11 },
      { id: "2", message: "first post", likeCount: 15 },
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: "3",
    message: postMessage,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
};

export default state;

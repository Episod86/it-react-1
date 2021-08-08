const ADDPOST = "ADD-POST";
const UPDATENEWPOSTTEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADDPOST:
      let newPost = {
        id: "3",
        message: postMessage,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATENEWPOSTTEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADDPOST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATENEWPOSTTEXT,
  newText: text,
});

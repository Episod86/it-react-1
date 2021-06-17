import React from "react";

import { Post } from "./Post";

import style from "./MyPosts.module.css";

export const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={style.posts}>{postElement}</div>
    </div>
  );
};

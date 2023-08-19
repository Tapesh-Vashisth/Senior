import React from "react";
import { Post } from "./Post";
import "../styles/postlists.css"

function PostsList({ postList }) {
  console.log(postList);
  return (
    <div className="post_container">
      {postList.map((post, index) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            bookmark={post.bookmark}
            description={post.description}
            id={post.id}
            likes={post.likes}
            image={post.image}
            index={index}
            date={post.created}
          />
        );
      })}
    </div>
  );
}

export default PostsList;

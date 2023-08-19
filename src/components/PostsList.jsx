import React from "react";
import { Post } from "./Post";
import "../styles/postlists.css"

function PostsList({ postList, boardIndex, colorIndex }) {
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
            boardIndex={boardIndex}
            colorIndex={colorIndex}
          />
        );
      })}
    </div>
  );
}

export default PostsList;

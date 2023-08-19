import React, { useState } from "react";
import { Post } from "./Post";
import "../styles/postlists.css"
import CreatePostModal from "./CreatePostModal";

function PostsList({ postList, boardIndex }) {
  const [postIndex, setPostIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
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
              setOpen = {setOpen}
              setPostIndex = {setPostIndex}
            />
          );
        })}
      </div>
      <CreatePostModal mode = "edit" editOpen = {open} setEditOpen = {setOpen} boardIndex={boardIndex} postIndex = {postIndex} />
    </>
  );
}

export default PostsList;

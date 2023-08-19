import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CreateModal from "../components/CreateModal";
import "../styles/posts.css";
import CreatePostModal from "../components/CreatePostModal";
import NotFound from "../components/NotFound";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageLoader from "../components/loaders/PageLoader";
import PostsList from "../components/PostsList";
import colors from "../data/colors";

function Bookmarked() {
  const [postList, setPostList] = useState([]);
  const boardId = useParams().boardId;
  const [boardIndex, setBoardIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(Number(0));
  const boards = useSelector((state) => state.boards);

  useEffect(() => {
    for (let i = 0; i < boards.boards.length; i++) {
      if (boards.boards[i].id === boardId) {
        setBoardIndex(i);
        setColorIndex(Number(boards.boards[i].color));
        break;
      }
    }
  }, []);


  const onSearch = (title) => {
    if (title === "") {
      setPostList((prev) => {
        let hold = [];
        boards.boards[boardIndex].posts.forEach((x, index) => {
          if (x.bookmark) {
            hold.push({index: index, ...x});
          }
        });
        return hold;
      });
    } else {
      setPostList((prev) => {
        let hold = [];
        boards.boards[boardIndex].posts.forEach((x, index) => {
          if (x.title.includes(title) && x.bookmark) {
            hold.push({index: index, ...x});
          }
        });
        return hold;
      })
    }
  }



  useEffect(() => {
    const posts = boards.boards[boardIndex].posts;

    setPostList((prev) => {
      let hold = []
      posts.forEach((x, index) => {
        if (x.bookmark) {
          hold.push({index: index, ...x});
        }
      })

      return hold;
    });
  }, [boards, boardIndex]);


  const color = colorIndex === 0 || colorIndex === 3 ? "black" : "white";

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NavBar
        className="navbar"
        type="posts"
        title={boards.boards[boardIndex].title}
        onSearch={onSearch}
        coloredBookmark = {true}
      />
      <div
        className="addPost_Modal"
        style={{
          justifyContent: postList.length === 0 ? "space-between" : "flex-end",
          paddingLeft: "5px",
          paddingRight: "20px",
          background: colors[Number(boards.boards[boardIndex].color)],
        }}
      >
        <h2 style={{ marginLeft: "20px", color: `${color}` }}>Bookmarked Posts</h2>
      </div>
      <div
        style={{
          background: colors[Number(boards.boards[boardIndex].color)],
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {postList.length > 0 ? (
          <PostsList
            postList={postList}
            boardIndex={boardIndex}
            colorIndex={colorIndex}
          />
        ) : (
          <NotFound type="post" colorIndex={colorIndex} />
        )}
      </div>
    </div>
  );
}

export default Bookmarked;

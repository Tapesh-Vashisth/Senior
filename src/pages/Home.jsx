import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/home.css'
import { useSelector } from "react-redux";
import { BoardsList } from "../components/BoardsList";

function Home() {
  const boards = useSelector((state) => state.boards);
  const [boardList, setBoardList] = useState([]);

  const onSearch = (title) => {
    if (title === "") {
      setBoardList(boards.boards);
    } else {
      setBoardList((prev) => {
        return prev.filter((x) => x.title.includes(title));
      })
    }
  }

  useEffect(() => {
    setBoardList(boards.boards);
  }, [boards.boards]);
  
  return (
    <>
      <NavBar className="navbar" type = "board" onSearch = {onSearch} />
      <BoardsList boardList={boardList} />
    </>
  );
}

export default Home;

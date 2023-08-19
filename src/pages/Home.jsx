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
      setBoardList((prev) => {
        let hold = [];
        boards.boards.forEach((x, index) => {
            hold.push({index: index, ...x});
        });
  
        return hold;
      })
    } else {
      setBoardList((prev) => {
        let hold = [];
        boards.boards.forEach((x, index) => {
          if (x.title.includes(title)) {
            hold.push({index: index, ...x});
          }
        });

        return hold;
      })
    }
  }

  useEffect(() => {
    setBoardList((prev) => {
      let hold = [];
      boards.boards.forEach((x, index) => {
          hold.push({index: index, ...x});
      });

      return hold;
    })
  }, [boards.boards]);
  
  return (
    <div style = {{display: "flex", flexGrow: 1, flexDirection: "column", height: "100vh"}}>
      <NavBar className="navbar" type = "board" onSearch = {onSearch} title = "" />
      <BoardsList boardList={boardList} />
    </div>
  );
}

export default Home;

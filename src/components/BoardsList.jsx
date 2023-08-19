import React, { useEffect } from "react";
import Board from "./Board";
import { useSelector } from "react-redux";
import colors from "../data/colors";
import "../styles/boardList.css";
import NotFound from "./NotFound";

export const BoardsList = ({boardList}) => {
  console.log(boardList);


  return (
    <div className="boards_div">
      <h2>My boards</h2>
        {
          boardList.length > 0 
          ?
          <ul className="board_list">
            {boardList.map((board, index) => {
              return (
                <li key={board.id}>
                  <Board
                    boardName={board.title}
                    boardColor={board.color}
                    boardId={board.id}
                    index = {index}
                  />
                </li>
              );
            })}
          </ul>
          :
          <NotFound />
        }
    </div>
  );
};

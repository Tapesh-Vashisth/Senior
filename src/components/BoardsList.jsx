import React, { useEffect } from "react";
import Board from "./Board";
import { useSelector } from "react-redux";
import colors from "../data/colors";
import "../styles/boardList.css";

export const BoardsList = () => {
  const boards = useSelector((state) => state.boards);

  const boardsList = boards.boards;

  console.log(boardsList);

  // conso

  // useEffect(() => {
  //   console.log(boards)
  // }, [])

  return (
    <div className="boards_div">
      <h2>My boards</h2>
      <ul className="board_list">
        {boardsList.map((board) => {
          return (
            <li key={board.id}>
              <Board
                
                boardName={board.title}
                boardColor={board.color}
                boardId={board.id}
              />
            </li>
          );
        })}
        {/* <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" />
        <Board boardName="new board" /> */}
      </ul>
    </div>
  );
};

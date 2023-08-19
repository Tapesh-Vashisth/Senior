import React, { useEffect, useState } from "react";
import Board from "./Board";
import { useSelector } from "react-redux";
import colors from "../data/colors";
import "../styles/boardList.css";
import NotFound from "./NotFound";
import CreateModal from "./CreateModal";

export const BoardsList = ({boardList}) => {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

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
                    setEditIndex = {setEditIndex}
                    setOpen = {setOpen}
                  />
                </li>
              );
            })}
          </ul>
          :
          <NotFound />
        }

        <CreateModal openModal = {open} mode="edit" editIndex={editIndex} setOpenModal={setOpen} />
    </div>
  );
};

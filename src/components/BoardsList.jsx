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
          <div className="board_list">
            {boardList.map((board, index) => {
              return (

                  <Board
                    key = {board.id}
                    boardName={board.title}
                    boardColor={board.color}
                    boardId={board.id}
                    index = {board.index}
                    setEditIndex = {setEditIndex}
                    setOpen = {setOpen}
                  />

              );
            })}
          </div>
          :
          <NotFound type = "board" />
        }

        <CreateModal openModal = {open} mode="edit" editIndex={editIndex} setOpenModal={setOpen} />
    </div>
  );
};

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/CreateModal.css";
import colors from "../data/colors";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../features/boardSlice";
import { v4 as uuidv4 } from "uuid";
import CreateButton from "./CreateButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  minWidth: 276,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 3,
  py: 4,
  borderRadius: "10px",
  width: "100%",
  maxHeight: "100vh",
  overflow: "scroll",
};

function CreateModal({ mode, index }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [color, setColor] = React.useState(0);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const boards = useSelector((state) => state.boards);

  const handleCreateBoard = (e) => {
    e.preventDefault();

    dispatch(
      boardActions.addBoard({ id: uuidv4(), title: title, color: color })
    );
    setTitle("");
    setOpen(0);
    handleClose();
  };

  useEffect(() => {
    if (mode === "edit") {
      setTitle(boards.boards[index].title);
      setColor(Number(boards.boards[index].color));
    }
  }, []);

  return (
    <>
      {window.screen.availWidth > 650 && <CreateButton modal={handleOpen} name="Create New Board" icon="+" />}
      {window.screen.availWidth <= 650 && <CreateButton modal={handleOpen} name="" icon="+" />}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleCreateBoard}>
            <div className="create-modal-header">
              <h4>Add a name for your board</h4>
              <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
            </div>

            <div className="create-modal-input-container">
              <input
                className="create-modal-input"
                type="text"
                name="title"
                placeholder="Enter Board Name"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="create-modal-subheader">
              <h4 className="create-modal-subheader-text">
                Select post colour
              </h4>
              <p className="create-modal-subheader-subheader">
                Here are some templates to help you get started
              </p>
            </div>

            <div className="create-modal-color-container">
              {colors.map((color, index) => {
                return (
                  <div className="create-modal-color" key={index}>
                    <input
                      type="radio"
                      name="create-color"
                      className="create-color"
                      onChange={(e) => setColor(e.target.value)}
                      value={index}
                      id={index}
                      hidden
                      defaultChecked={index === 0 ? true : false}
                    />
                    <label
                      htmlFor={index}
                      style={{ background: color }}
                    ></label>
                  </div>
                );
              })}
            </div>

            <div className="create-modal-button-container">
              <button className="create-modal-button" type="submit">
                Create board
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default CreateModal;

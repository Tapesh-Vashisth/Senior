import React from "react";
import "../styles/board.css";
import colors from "../data/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { boardActions } from "../features/boardSlice";

const options = ["Edit", "Delete"];

function Board(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(boardActions.deleteBoard(props.index));
    handleClose();
  }
  
  const handleEdit = () => {
    
    handleClose();
  }

  return (
    <div className="board_box">
      <div
        className="color_div"
        style={{ background: `${colors[Number(props.boardColor)]}` }}
      ></div>
      <div className="name_div">{props.boardName}</div>
      <div className="colon_div">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              // maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={option === "Edit" ? handleEdit: handleDelete}
            >
              {option === "Edit" ? (
                <>
                  <DriveFileRenameOutlineIcon />
                  <p>{option}</p>
                </>
              ) : (
                <>
                  <DeleteOutlineIcon sx={{ color: "red" }} />
                  <p style={{ color: 'red'}}>{option}</p>
                </>
              )}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export default Board;

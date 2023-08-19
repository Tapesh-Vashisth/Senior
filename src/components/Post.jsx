import React from "react";
import "../styles/posts.css";
import colors from "../data/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { boardActions } from "../features/boardSlice";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const options = ["Edit", "Delete"];

export const Post = ({
  title,
  bookmark,
  description,
  id,
  likes,
  image,
  index,
  date
}) => {
  const navigate = useNavigate();
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
    dispatch(boardActions.deleteBoard(index));
    handleClose();
  };

  const handleEdit = () => {
    handleClose();
    // props.setEditIndex(props.index);
    // props.setOpen(true);
  };

  const handleBoard = (id) => {
    navigate("/board/" + id);
  };

  return (
    <div className="post_subcontainer">
      <div className="post_header">
        <h3 style={{ marginRight: "100px"}}>{title}</h3>
        <div style={{  display: "flex", justifyContent: "flex-end"}}>
        <BookmarkBorderIcon sx={{
            height: "15px",
            width: "20px",
        }}/>

        </div>
        <div className="post_colon_div">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon sx={{
            height: "15px",
            width: "22px",
        }}/>
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
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={option === "Edit" ? handleEdit : handleDelete}
              >
                {option === "Edit" ? (
                  <>
                    <DriveFileRenameOutlineIcon />
                    <p>{option}</p>
                  </>
                ) : (
                  <>
                    <DeleteOutlineIcon sx={{ color: "red" }} />
                    <p style={{ color: "red" }}>{option}</p>
                  </>
                )}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <div className="post_details">
        <div style={{
            fontSize: "12px",
            color: "grey",
        }}>{date}</div>
        <div className="details_image">
            <img src={image} alt="" />
        </div>
        <div className="details_description">{description}</div>
      </div>
      <div className="likes" style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "5px"
      }}>
        <FavoriteBorderIcon />
        <p>{likes}</p>
      </div>
    </div>
  );
};

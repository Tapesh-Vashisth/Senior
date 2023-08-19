import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/CreatePostModal.css";
import colors from '../data/colors';
import { useDispatch } from 'react-redux';
import { boardActions } from '../features/boardSlice';
import {v4 as uuidv4} from 'uuid';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    minWidth: 276,
    bgcolor: 'background.paper',
    boxShadow: 24,
    px: 3,
    py: 4,
    borderRadius: "10px"
};

function CreatePostModal() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [color, setColor] = React.useState(0);
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCreateBoard = (e) => {
        e.preventDefault();
        
        dispatch(boardActions.addBoard({ id: uuidv4(), title: title, color: color}));
        setTitle("")
        setOpen(0)
        handleClose();
    }

    return (
        <>
            <Button onClick={handleOpen}>Open modal 2</Button>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{style: {backgroundColor: "rgba(0, 0, 0, 0.8)"}}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleCreateBoard}>
                        <div className='create-post-modal-header'>
                            <div>
                                <h4>Create a post</h4>
                                <p>Write something for your post</p>
                            </div>
                            <CloseIcon onClick = {handleClose} sx = {{cursor: "pointer"}} />
                        </div>

                        <div className='create-post-modal-input-container'>
                            <label>Subject</label>
                            <input className='create-post-modal-input' type="text" name='title' placeholder='Enter Post Title' value={title} required onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className='create-post-modal-subheader'>
                            <h4 className='create-post-modal-subheader-text'>Select post colour</h4>
                            <p className='create-post-modal-subheader-subheader'>Here are some templates to help you get started</p>
                        </div>

                        <div className='create-post-modal-color-container'>
                            {
                                colors.map((color, index) => {
                                    return (
                                        <div className='create-post-modal-color' key={index}>
                                            <input type="radio" name="create-color" className='create-post-color' onChange={(e) => setColor(e.target.value)} value={index} id={index} hidden defaultChecked = {index === 0 ? true: false} />
                                            <label htmlFor={index} style = {{background: color}}></label>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="create-post-modal-button-container">
                            <button className='create-post-modal-button' type='submit'>Create board</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default CreatePostModal
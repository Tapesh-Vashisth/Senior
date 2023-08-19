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
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { toast } from 'react-toastify';
import convertToBase64 from '../helper/convertToBase64';
import CreateButton from './CreateButton';


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
    borderRadius: "10px",
    width: "100%",
    maxHeight: "100vh",
    overflow: "scroll"
};

function CreatePostModal() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [image, setImage] = React.useState("");
    const [description, setDescription] = React.useState("");
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setImage("");
        setOpen(false)
    };


    const handleCreatePost = (e) => {
        e.preventDefault();
        console.log(title, description, image)

        
    }

    const handleImage = async (e) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg") {
                let base64 = await convertToBase64(file);
                setImage(base64);
            } else {
                toast.error("Allowed formats are - jpeg, png & jpg", {
                    position: "top-right"
                })
            }
        }
    }

    return (
        <>
            {/* <Button onClick={handleOpen}>+ Create New Post</Button> */}
            <CreateButton modal={handleOpen} name="Create New Post" icon="+" />
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{style: {backgroundColor: "rgba(0, 0, 0, 0.8)"}}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleCreatePost}>
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

                        <div>
                            {
                                image !== ""
                                ?
                                <label htmlFor="image" className='create-post-image-container'>
                                    <img src={image} className='create-post-image' alt="img" />
                                </label>
                                :
                                <label htmlFor='image' className='create-post-add-image'>
                                    <InsertPhotoOutlinedIcon style = {{color: "grey", width: "15px", marginRight: "6px"}} />
                                    <p>Add your image</p>
                                </label>
                            }
                            <input type="file" name="image" id="image" hidden multiple={false} onChange={handleImage} />
                        </div>

                        <hr className='create-post-modal-separator' />

                        <div className='create-post-modal-input-container'>
                            <label>What's on your mind?</label>
                            <textarea placeholder='type here' rows={3} required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
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
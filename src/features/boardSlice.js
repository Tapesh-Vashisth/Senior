import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    boards: []
};

const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        reset: () => initialState,
        setBoards: (state, action) => {
            state.boards = action.payload
        },
        addBoard: (state, action) => {
            state.boards.push(action.payload)
            localStorage.setItem("Boards", JSON.stringify(state.boards));
        },
        editBoard: (state, action) => {
            state.boards[action.payload.index].title = action.payload.title;
            state.boards[action.payload.index].color = action.payload.color;
            localStorage.setItem("Boards", JSON.stringify(state.boards));
        },
        deleteBoard: (state, action) => {
            state.boards.splice(action.payload, 1);
            localStorage.setItem("Boards", JSON.stringify(state.boards));
        },
        addPost: (state, action) => {
            const {boardIndex, title, description, image} = action.payload;
            if (state.boards[boardIndex].posts) {
                state.boards[boardIndex].posts.push({id: uuidv4(), created: new Date(), title: title, description: description, image: image, likes: 0, bookmark: false})
            } else {
                state.boards[boardIndex].posts = [{id: uuidv4(), created: new Date(), title: title, description: description, image: image, likes: 0, bookmark: false}];
            }
            localStorage("Boards", JSON.stringify(state.boards));
        },
        likePost: (state, action) => {
            state.boards[action.payload.boardIndex].posts[action.payload.postIndex].likes += 1;
            localStorage("Boards", JSON.stringify(state.boards));
        },
        bookmark: (state, action) => {
            state.boards[action.payload.boardIndex].posts[action.payload.postIndex].bookmark = !state.boards[action.payload.boardIndex].posts[action.payload.postIndex].bookmark;
            localStorage("Boards", JSON.stringify(state.boards));    
        }
    }
})

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;
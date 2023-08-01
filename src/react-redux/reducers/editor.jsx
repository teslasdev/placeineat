import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   setPostId : ""
}; 


export const editorSlice = createSlice({
   name: "editor",
   initialState,
   reducers: {
      onPage: (state, { payload }) => {
         state.setPostId = payload.data;
      },
   },
 });
 
 export const { onPage } = editorSlice.actions;
export const editorSelector = (state) => state.editor;
export default editorSlice.reducer
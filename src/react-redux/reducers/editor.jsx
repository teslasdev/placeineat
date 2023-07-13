import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   setEditor : false,
   setPage : false,
   setAction : false,
}; 


export const editorSlice = createSlice({
   name: "editor",
   initialState,
   reducers: {
      toggleEditorModal: (state, { payload }) => {
         state.setEditor = payload.data;
      },
      togglePageModal: (state, { payload }) => {
         state.setPage = payload.data;
      },
      toggleActionModal: (state, { payload }) => {
         state.setAction = payload.data;
      },
      
   },
 });
 
 export const { toggleHeaderModal , toggleImageModal , toggleTextModal } = editorSlice.actions;
export const editorSelector = (state) => state.editor;
export default editorSlice.reducer
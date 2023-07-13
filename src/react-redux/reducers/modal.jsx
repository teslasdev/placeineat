import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   logoutModalOpen: false,
   DeleteModalOpen : false,
   selectedToDelete : ""
   
}; 


export const modalSlice = createSlice({
   name: "modal",
   initialState,
   reducers: {
      toggleLogoutModal: (state, { payload }) => {
         state.logoutModalOpen = payload.data;
      },
      toggleDeleteModal: (state, { payload }) => {
         state.DeleteModalOpen = payload.data.modalState;
         state.selectedToDelete = payload.data.blogID
      }
   },
 });
 
 export const { toggleLogoutModal , toggleDeleteModal } = modalSlice.actions;
export const modalSelector = (state) => state.modal;
export default modalSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   logoutModalOpen: false,
   DeleteModalOpen : false,
   selectedToDelete : "",
   selectedValue : "",
   OpenModal : false
   
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
      },
      toggleOpenModal: (state, { payload }) => {
         state.OpenModal = payload.data.modalState;
         state.selectedValue = payload.data.id
      }
   },
 });
 
 export const { toggleLogoutModal , toggleDeleteModal , toggleOpenModal } = modalSlice.actions;
export const modalSelector = (state) => state.modal;
export default modalSlice.reducer
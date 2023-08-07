import { useRef, useState } from "react";
import { toggleOpenModal } from "../../react-redux/reducers/modal";
import {useDispatch } from "react-redux";
import { InputForm } from "../../pages/Admin/components/inputForm/inputs";
import Loader from "../../pages/helpers/components/Loader";
import { useCreatePreference } from "../../pages/helpers/api-hooks/usePreference";
import { useCreateCuisine } from "../../pages/helpers/api-hooks/useCuisine";
const AddModalCuisine = ({
   isFile
}) => {
  const dispatch = useDispatch();
  const {formik , isLoading} = useCreateCuisine()
  const dismiss = () => dispatch(toggleOpenModal({data: {modalState : false, id : ""}}));
   const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
   };
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="container h-full overflow-y-auto overflow-x-hidden fixed 
      top-0 right-0 left-0 z-50 min-w-full md:inset-0 h-modal md:h-screen 
      backdrop-blur-sm backdrop-brightness-50"
    >
      <div className="flex relative p-4 w-full justify-center pt-28 pb-72">
        <div className="relative w-full md:w-[30%] bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent 
            hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto 
            inline-flex items-center"
            data-modal-toggle="popup-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={dismiss}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <form className="p-10 min-h-[350px] flex items-center justify-center gap-5 flex-col w-full">
            <div className="w-full">
              <InputForm 
                name="name"
                className="w-[100%] rounded-md h-[40px] text-black" 
                label="Name" placeholder="" 
                text="text" 
                error={formik.errors.name}
                onChange={formik.handleChange}
              />
            </div> 
            <div className="w-full"> 
              <div className="bg-green-300 rounded-full h-[40px] flex items-center justify-center text-white text-sm cursor-pointer" onClick={handleSubmit}>
                {isLoading ? <Loader /> : 'Add'}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModalCuisine;

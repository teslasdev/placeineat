import { useRef, useState } from "react";
import { toggleOpenModal } from "../../react-redux/reducers/modal";
import {useDispatch } from "react-redux";
import { InputForm } from "../../pages/Admin/components/inputForm/inputs";
import Loader from "../../pages/helpers/components/Loader";
import { toast } from "react-toastify";
import convertToBase64 from "../../pages/helpers/convert";
import axios from "axios";
const AddModal = () => {
  const dispatch = useDispatch();
  const dismiss = () => dispatch(toggleOpenModal({data: {modalState : false, id : ""}}));
  const [isLoading , setIsLoading] = useState(false)
  const inputFile = useRef(null)
  const [file , setFile] = useState(null)
  const [infoCity ,setInfo] = useState({
    name : '',
    description : '',
    featured_img : '',
    status : 1,
    error : "false"
  })

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const onUpload = async e => {
    const filePath = e.target.files[0];
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64);
    setInfo({...infoCity ,featured_img : filePath.name })
    const formData = new FormData()
    formData.append("file", filePath);
    fetch(import.meta.env.VITE_APP_BACKEND_URL + "upload_files", {
      method: 'POST',
      content : "multipart/form-data",
      body : formData,
    })
    .then(res => {
      if(!res.ok) {
        toast.warning('Error Uploading Image,Try again')
      }
      return res.json()
    })
    .then(data => {
      setId(data.data)
    })
    .catch((err) => ("Error occured", err));
    
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    if(!infoCity.name  || !infoCity.description) {
      setInfo({...infoCity , error : "true"})
      setIsLoading(false)
      return;
    } else {
      axios.post(import.meta.env.VITE_APP_BACKEND_URL + "cities/" , infoCity)
      .then((res) => {
        if(res.data.success) {
          setTimeout(() => {
            window.location.reload();
          }, 3000)
          toast.success(res.data.message)
          dispatch(toggleOpenModal({ data: { modalState : false , id : ""} }));
        }  else {
          setIsLoading(false)
          toast.warning(res.data.message)
        }
        
      }).catch((err) => {
        setIsLoading(false)
        toast.warning(err)
      })
    }
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
                label="City Name" placeholder="" 
                text="text" 
                Value={infoCity.name}
                error={infoCity.error}
                onChange={(e) => setInfo({...infoCity ,name : e.target.value})}
              />
            </div>
            <div className="w-full">
              <InputForm 
                textArea="true"
                name="description"
                className="w-[100%] rounded-md h-[100px] text-black" 
                label="Decription(optional)" placeholder="" 
                text="text" 
                error={infoCity.error}
                Value={infoCity.description}
                onChange={(e) => setInfo({...infoCity , description : e.target.value})}
              />
            </div>
            <div className="w-full">
              <input type="file"  ref={inputFile} onChange={onUpload}  name="files" id="" className='p-2 outline-none rounded-md mt-4 w-[50%]' hidden/>
              <div className="border-dotted border-2 border-gray-200 flex items-center justify-center text-gray-200 rounded-md w-[100%] h-[200px]" onClick={onButtonClick}>
                {file !== null ? <img src={file} alt="" className='w-full rounded-md h-full object-cover' /> : "+"}
              </div>
            </div>

            <div className="w-full"> 
              <div className="bg-green-300 rounded-full h-[40px] flex items-center justify-center text-white text-sm cursor-pointer" onClick={(e) => handleSubmit(e)}>
                {isLoading ? <Loader /> : 'Add City'}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;

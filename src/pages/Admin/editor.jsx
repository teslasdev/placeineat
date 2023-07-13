import React , {useState} from 'react'
import Sidebar from './Sidebar'
import { BsPencilFill , BsFillCameraVideoFill } from 'react-icons/bs'
import { ImFilePicture } from 'react-icons/im'
import { IoTextSharp } from 'react-icons/io5'
import { RiImageEditFill } from 'react-icons/ri'
import { AiOutlineLink } from 'react-icons/ai'
import { FaHeading } from 'react-icons/fa'
import { TailSpin } from 'react-loader-spinner';
import { editorSelector, toggleHeaderModal } from '../../react-redux/reducers/editor'
import { useDispatch, useSelector } from 'react-redux'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import randomstring from "randomstring";
import { Link , useLocation } from 'react-router-dom'


export const Editor = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const { setHeader } = useSelector(editorSelector);
   const [editTitle , setTitle] = useState(false);
   const dismiss = () => dispatch(toggleHeaderModal({ data: true }));
   const [isLoading, setIsLoading] = useState(false)
   const [tabs , setTabs] = useState(0)
   const [userInfo, setuserInfo] = useState({
      title: '',
   });
   var toolbarOptions = [
     
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
    
      ['clean'] ,
      ['link', 'image'],                                     // remove formatting button
    ];
    
   const module = {
      toolbar:toolbarOptions
   }

   const [description, setDescription] = useState("");

   const onEditorStateChange = (content, delta, source, editor) => {
      setDescription(editor.getHTML());
   }

   const onChangeValue = (e) => {
      setuserInfo({
        ...userInfo,
        [e.target.name]:e.target.value
      });
    }


    const data = {
      id : randomstring.generate(),
      title : userInfo.title,
      content : description,
      status : 'draft',

   }
    const handleSubmit = () => {
      setIsLoading(true)
      if(userInfo.title == "") {
         toast.error('Blog Title Can not be Black')
      }
      axios.post("https://placeineat.onrender.com/upload-post", {
        body: data,
      })
      .then(function (response) {
         toast.success("Post Saved to draft")
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-[75%] px-12 p-2 overflow-scroll'>
               <div className='text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between  w-[350px] cursor-pointer'>
                        <Link to="/post" className={`${location.pathname === '/post' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Editor
                        </Link>

                        <Link to="/page-setting" className={`${location.pathname === '/page-setting' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Page Settle
                        </Link>

                        <Link to='/status' className={`${location.pathname === '/status' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Preview
                        </Link>
                     </div>

                     <div className='flex gap-2 cursor-pointer items-center'>

                        <div className='bg-yellow-500 text-white flex px-4 rounded-full p-3 h-full' onClick={handleSubmit}>
                           Save 
                        </div>
                        {isLoading && <TailSpin
                           height="30"
                           width="30"
                           color="green"
                           ariaLabel="tail-spin-loading"
                           radius="1"
                           wrapperStyle={{}}
                           wrapperClass=""
                           visible={true}
                        />
                        }
                        
                        
                     </div>
                  </div>

                  <div className='flex items-center text-lg gap-3'>
                     <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer' onClick={() => setTitle(!editTitle)}>
                        <BsPencilFill size={15} />
                     </div>
                     <h3 className='w-full'>Title : 
                        <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="bg-transparent border-none outline-none w-[90%]" placeholder="Enter Title" required />
                     </h3>
                     
                  </div>


                  <div className='flex gap-4'>
                     <div className='relative bg-white shadow-lg rounded-md h-[500px] mt-4 w-[90%]'>
                       {setHeader &&  
                        <div className='flex p-2 gap-2 cursor-pointer text-sm'>
                           <div className='w-[30px] h-[30px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              h1
                           </div> 
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h2
                           </div>  
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h3
                           </div>   
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h4
                           </div> 
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h5
                           </div> 
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h6
                           </div> 
                        </div>}


                        <div className='w-full h-[100%]'>
                           <div className="p-3 h-full overflow-scroll">
                              <ReactQuill modules={module} theme="snow" value={description} className='h-full  border-none' onChange={onEditorStateChange}/>
                           </div>
                        </div>
                     </div>

                     {/* <div className='w-[10%] flex gap-3 flex-wrap mt-4 items-start justify-start h-[500px]'>
                        <div className='flex flex-wrap justify-between gap-2 cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <ImFilePicture size={20} />
                           </div>                     

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsFillCameraVideoFill size={20} />
                           </div>                     

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <IoTextSharp size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white' onClick={dismiss}>
                              <FaHeading size={20} />
                           </div>


                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineLink size={20} />
                           </div>


                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <RiImageEditFill size={20} />
                           </div>
                        </div>
                     </div> */}
                 </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export const PageSetting = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const { setHeader } = useSelector(editorSelector);
   const [editTitle , setTitle] = useState(false);
   const dismiss = () => dispatch(toggleHeaderModal({ data: true }));
   const [isLoading, setIsLoading] = useState(false)
   const [tabs , setTabs] = useState(0)

   const handleSubmit = () => {
      
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-[75%] px-12 p-2 overflow-scroll'>
               <div className='text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between  w-[350px] cursor-pointer'>
                        <Link to="/post" className={`${location.pathname === '/post' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Editor
                        </Link>

                        <Link to="/page-setting" className={`${location.pathname === '/page-setting' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Page Settle
                        </Link>

                        <Link to='/status' className={`${location.pathname === '/status' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Preview
                        </Link>
                     </div>

                     <div className='flex gap-2 cursor-pointer items-center'>

                        <div className='bg-yellow-500 text-white flex px-4 rounded-full p-3 h-full' onClick={handleSubmit}>
                           Save 
                        </div>
                        {isLoading && <TailSpin
                           height="30"
                           width="30"
                           color="green"
                           ariaLabel="tail-spin-loading"
                           radius="1"
                           wrapperStyle={{}}
                           wrapperClass=""
                           visible={true}
                        />
                        }
                        
                        
                     </div>
                  </div>

                  <div className='flex flex-col gap-8'>
                     <div>
                        <div className='flex items-center text-lg gap-3'>
                           <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer' onClick={() => setTitle(!editTitle)}>
                              <BsPencilFill size={15} />
                           </div>
                           <h3 className='text-sm'>Slug</h3>
                        </div>
                        <div>
                           <textarea type="text" name="" id="" className='p-2 outline-none rounded-md mt-4 w-[50%]' />
                        </div>
                     </div>

                     <div>
                        <div className='flex items-center text-lg gap-3'>
                           <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer' onClick={() => setTitle(!editTitle)}>
                              <BsPencilFill size={15} />
                           </div>
                           <h3 className='text-sm'>Feature Image</h3>
                        </div>
                        <div className=''>
                           <input type="file" name="" id="" className='p-2 outline-none rounded-md mt-4 w-[50%]' hidden/>
                           <div className='cursor-pointer flex items-center justify-center border-2 text-gray-300 border-gray-200 border-dotted m-4 rounded-md w-[150px] h-[200px]'>
                              Upload Image
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export const Action = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const { setHeader } = useSelector(editorSelector);
   const [editTitle , setTitle] = useState(false);
   const [isLoading, setIsLoading] = useState(false)
   const [userInfo, setuserInfo] = useState({
      title: '',
   });
   var toolbarOptions = [
     
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
    
      ['clean'] ,
      ['link', 'image'],                                     // remove formatting button
    ];
    
   const module = {
      toolbar:toolbarOptions
   }

   const [description, setDescription] = useState("");

   const onEditorStateChange = (content, delta, source, editor) => {
      setDescription(editor.getHTML());
   }

   const onChangeValue = (e) => {
      setuserInfo({
        ...userInfo,
        [e.target.name]:e.target.value
      });
    }


    const data = {
      id : randomstring.generate(),
      title : userInfo.title,
      content : description,
      status : 'draft',

   }
    const handleSubmit = () => {
      setIsLoading(true)
      if(userInfo.title == "") {
         toast.error('Blog Title Can not be Black')
      }
      axios.post("http://localhost:2000/upload-post", {
        body: data,
      })
      .then(function (response) {
         toast.success("Post Saved to draft")
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-[75%] px-12 p-2 overflow-scroll'>
               <div className='text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between  w-[350px] cursor-pointer'>
                        <Link to="/post" className={`${location.pathname === '/post' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Editor
                        </Link>

                        <Link to="/page-setting" className={`${location.pathname === '/page-setting' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Page Settle
                        </Link>

                        <Link to='/status' className={`${location.pathname === '/status' && "bg-green-500 text-white px-6"} rounded-full p-3 h-full`}>
                           Preview
                        </Link>
                     </div>

                     <div className='flex gap-2 cursor-pointer items-center'>

                        <div className='bg-yellow-500 text-white flex px-4 rounded-full p-3 h-full' onClick={handleSubmit}>
                           Save 
                        </div>
                        {isLoading && <TailSpin
                           height="30"
                           width="30"
                           color="green"
                           ariaLabel="tail-spin-loading"
                           radius="1"
                           wrapperStyle={{}}
                           wrapperClass=""
                           visible={true}
                        />
                        }
                        
                        
                     </div>
                  </div>

                  <div className='flex items-center text-lg gap-3'>
                     <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer' onClick={() => setTitle(!editTitle)}>
                        <BsPencilFill size={15} />
                     </div>
                     <h3 className='w-full'>Title : 
                        <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="bg-transparent border-none outline-none w-[90%]" placeholder="Enter Title" required />
                     </h3>
                     
                  </div>


                  <div className='flex gap-4'>
                     <div className='relative bg-white shadow-lg rounded-md h-[500px] mt-4 w-[90%]'>
                       {setHeader &&  
                        <div className='flex p-2 gap-2 cursor-pointer text-sm'>
                           <div className='w-[30px] h-[30px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              h1
                           </div> 
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h2
                           </div>  
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h3
                           </div>   
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h4
                           </div> 
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h5
                           </div> 
                           <div className='w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center shadow-md text-white'>
                              h6
                           </div> 
                        </div>}


                        <div className='w-full h-[100%]'>
                           <div className="p-3 h-full overflow-scroll">
                              <ReactQuill modules={module} theme="snow" value={description} className='h-full  border-none' onChange={onEditorStateChange}/>
                           </div>
                        </div>
                     </div>

                     {/* <div className='w-[10%] flex gap-3 flex-wrap mt-4 items-start justify-start h-[500px]'>
                        <div className='flex flex-wrap justify-between gap-2 cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <ImFilePicture size={20} />
                           </div>                     

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsFillCameraVideoFill size={20} />
                           </div>                     

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <IoTextSharp size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white' onClick={dismiss}>
                              <FaHeading size={20} />
                           </div>


                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineLink size={20} />
                           </div>


                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <RiImageEditFill size={20} />
                           </div>
                        </div>
                     </div> */}
                 </div>
               </div>
            </div>
         </div>
      </div>
   )
}
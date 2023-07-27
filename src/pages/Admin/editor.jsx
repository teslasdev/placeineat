import React , {useEffect, useRef, useState} from 'react'
import Sidebar from './Sidebar'
import { BsPencilFill, BsPhone, BsTablet  } from 'react-icons/bs'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { TailSpin } from 'react-loader-spinner';
import { editorSelector, toggleHeaderModal } from '../../react-redux/reducers/editor'
import { useDispatch, useSelector } from 'react-redux'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useLocation, useNavigate } from 'react-router-dom'
import convertToBase64  from '../helpers/convert'
import { useSearchParams } from 'react-router-dom';
import { useGetPostById } from '../helpers/api-hooks/usePost'
import {MdComputer} from 'react-icons/md'
import Logo from '../../assets/logoplacetoeat.png'


export const Editor = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();
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

    const rand = () => {
      let r = (Math.random() + 1).toString(36).substring(2);
      return r 
    }

    const data = {
      postId :  rand(),
      title : userInfo.title,
      content : description,

   }
    const handleSubmit = () => {
      setIsLoading(true)
      if(userInfo.title == "") {
         toast.error('Blog Title Can not be Black')
         setIsLoading(false)
      }
      axios.post(import.meta.env.VITE_APP_BACKEND_URL+ "upload-post", {
        body: data,
      })
      .then(function (response) {
         setTimeout(() => {
            navigate('/page-setting/?id=' + response.data.id)
            toast.success("Post Saved to draft")
         }, 3000)
         toast.success("Post Saved to draft")
      })
      .catch(function (error) {
         setIsLoading(false)
         toast.error("Error Uploading , Try Again")
      });
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-full md:w-[75%] px-4 md:px-12 p-2 overflow-scroll'>
               <div className='text-sm md:text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between w-[80%] md:w-[450px] cursor-pointer'>
                        <div  className={`${location.pathname === '/post' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Editor
                        </div>

                        <div  className={`${location.pathname === '/page-setting' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Page Settle
                        </div>

                        <div  className={`${location.pathname === '/status' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Preview
                        </div>
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
                        <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="bg-transparent border-none outline-none md:w-[90%]" placeholder="Enter Title" required />
                     </h3>
                     
                  </div>


                  <div className='flex'>
                     <div className='flex items-center bg-white shadow-lg  h-[500px] rounded-md mt-4 w-full md:w-[90%]'>
                           <div className="p-3 h-[90%] overflow-hidden">
                              <ReactQuill modules={module} theme="snow" value={description} className='h-[90%] pb-5 border-none' onChange={onEditorStateChange}/>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export const EditPage = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();
  
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
   const [description, setDescription] = useState();
   const onEditorStateChange = (content, delta, source, editor) => {
      setDescription(editor.getHTML());
   }

   const [searchParams] = useSearchParams();
   const postId = searchParams.get('id'); // 'name'
   if(postId == null) {
      navigate('/post')
   }
   const { data } = useGetPostById(postId)
   var item = "";
   if(data) {
      item = data[0]
   }
   useEffect(() => {
      setDescription(item['content'])
      setuserInfo({
         title:item['title']
       });
   } , [data])
   const onChangeValue = (e) => {
      setuserInfo({
        ...userInfo,
        [e.target.name]:e.target.value
      });
    }
    const dataForm = {
      postId :  postId,
      title : userInfo.title,
      content : description,
      status : 'draft',

   }
    const handleSubmit = () => {
      setIsLoading(true)
      if(userInfo.title == "") {
         toast.error('Blog Title Can not be Black')
         setIsLoading(false)
      } else {
         axios.post(import.meta.env.VITE_APP_BACKEND_URL + "edit-post", {
           body: dataForm,
         })
         .then(function (response) {
            setTimeout(() => {
               navigate('/page-setting/?id=' + response.data.id)
               toast.success("Post Saved to draft")
            }, 3000)
            toast.success("Post Saved to draft")
         })
         .catch(function (error) {
            setIsLoading(false)
            toast.error("Error Uploading , Try Again")
         });
      }
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-full md:w-[75%] px-4 md:px-12 p-2 overflow-scroll'>
               <div className='text-sm md:text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between w-[80%] md:w-[450px] cursor-pointer'>
                        <div  className={`${location.pathname === '/edit/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Editor
                        </div>

                        <div  className={`${location.pathname === '/page-setting/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Page Settle
                        </div>

                        <div  className={`${location.pathname === '/status/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Preview
                        </div>
                     </div>

                     <div className='flex gap-2 cursor-pointer items-center'>

                        <div className='bg-yellow-500 text-white flex md:px-4 rounded-full p-3 h-full' onClick={handleSubmit}>
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
                        <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="bg-transparent border-none outline-none  md:w-[90%]" placeholder="Enter Title" required />
                     </h3>
                     
                  </div>


                  <div className='flex'>
                     <div className='flex items-center bg-white shadow-lg  h-[500px] rounded-md mt-4 w-full md:w-[90%]'>
                           <div className="p-3 h-[90%] overflow-hidden">
                              <ReactQuill modules={module} theme="snow" value={description} className='h-[90%] pb-5 border-none' onChange={onEditorStateChange}/>
                           </div>
                     </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export const PageSetting = () => {
   const dispatch = useDispatch();
   const location = useLocation()
   const [editTitle , setTitle] = useState(false);
   const dismiss = () => dispatch(toggleHeaderModal({ data: true }));
   const [isLoading, setIsLoading] = useState(false)
   const inputFile = useRef(null)
   const [file , setFile] = useState(null)
   const [slug , setSlug] = useState('');
   const [files , setFiles] = useState([])
   const [pathFile , setFilesPath] = useState([])
   const [defaultImg, setDefault] = useState(0)
   const navigate = useNavigate();
   const onButtonClick = () => {
      // `current` points to the mounted file input element
      inputFile.current.click();
    };
   /** formik doensn't support file upload so we need to create this handler */
   const onUpload = async e => {
      const filePath = e.target.files[0];
      const base64 = await convertToBase64(e.target.files[0])
      setFile(base64);
      setFiles(prevFile => [...prevFile, base64]);
      setFilesPath(prevFile => [...prevFile,filePath.name]);
      const formData = new FormData()
      formData.append("files", filePath);
      fetch(import.meta.env.VITE_APP_BACKEND_URL + "upload_files", {
          method: 'POST',
          body: formData,
      })
      .then((res) => console.log(res))
      .catch((err) => ("Error occured", err));
      
   }

   const handleRemoveImg = (index) => {
      const Newfile = files.filter((_, i) => i !== index)
      setFiles(Newfile);
      if(defaultImg == index) {
         console.log(files.length)
         setDefault(files.length - 2)
      }
      else if(file.length == 2) {
         setDefault(files.length - 3)
      }

      setDefault(0)
   }
   
   const [searchParams] = useSearchParams();
   const postId = searchParams.get('id'); // 'name'
   const { data } = useGetPostById(postId)
   var item = "";
   if(data) {
      if(data == undefined) {
         item = '';
      } else {
         item =data[0]['slug'];
      }
   }
   useEffect(() => {
      setSlug(item)
   } , [data])

   const handleSubmit = () => {
      const slugEdited = slug.replace(/\s+/g, '-');
      const data = {
         postId : postId,
         slug : slugEdited , 
         files : pathFile[defaultImg],
         defaultImg : defaultImg
      }
      setIsLoading(true)
      if(slug == "") {
         toast.error("Slug can not be empty")
         setIsLoading(false)
      } 
      if(file == null) {
         toast.error("Add Featured Image")
         setIsLoading(false)
      } else {
         axios.post(import.meta.env.VITE_APP_BACKEND_URL + "upload-details", {
           body: data,
         })
         .then(function (response) {
            setTimeout(() => {
               navigate('/status/?id=' + response.data.id)
               toast.success("Post Saved to draft")
            }, 3000)
            toast.success("Post Saved to draft")
         })
         .catch(function (error) {
            setIsLoading(false)
            toast.error("Error Uploading , Try Again")
         });
      }
   }

   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-full md:w-[75%] px-4 md:px-12 p-2 overflow-scroll'>
               <div className='text-sm md:text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between w-[80%] md:w-[450px] cursor-pointer'>
                        <div  className={`${location.pathname === '/post/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Editor
                        </div>

                        <div  className={`${location.pathname === '/page-setting/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Page Settle
                        </div>

                        <div  className={`${location.pathname === '/status/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Preview
                        </div>
                     </div>

                     <div className='flex gap-2 cursor-pointer items-center'>
                        <button className='bg-yellow-500 text-white flex px-4 rounded-full p-3 h-full' onClick={handleSubmit}>
                           Save 
                        </button>
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
                           <h3 className='text-sm'>Slug <span className='text-red-600'>*</span></h3>
                        </div>
                        <div>
                           <textarea placeholder='E.g https://placetoeat.io/article/(slug)'  onChange={(e) => setSlug(e.target.value)} type="text" style={{resize: "none"}} name="slug" id="" className='bg-transparent border border-gray-200 border-dotted  p-2 outline-none rounded-md mt-4 h-[200px] w-[90%] md:w-[50%]' >{slug}</textarea>
                        </div>
                     </div>

                     <div>
                        <div className='flex items-center text-lg gap-3'>
                           <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer' onClick={() => setTitle(!editTitle)}>
                              <BsPencilFill size={15} />
                           </div>
                           <h3 className='text-sm'>Feature Image</h3>
                        </div>
                        <div className='flex'>
                           <input type="file" ref={inputFile} onChange={onUpload}  name="files" id="" className='p-2 outline-none rounded-md mt-4 w-[50%]' hidden/>
                           <div className='cursor-pointer flex items-center justify-center border-2 text-gray-300 border-gray-200 border-dotted m-4 rounded-md w-[150px] h-[200px]' onClick={onButtonClick}>
                              Upload Image
                           </div>
                           {
                              file &&
                              files.map((item, index) =>  {
                                 return (
                                    <div className='flex flex-col justify-center'key={index}>
                                    <div key={index} className='relative cursor-pointer flex items-center justify-center border-2 text-gray-300 border-gray-200 border-dotted m-4 rounded-md w-[150px] h-[200px]' onClick={onButtonClick}>
                                       <img src={item} alt="" className='w-full rounded-md h-full object-cover' />
                                       {defaultImg == index &&
                                          <div className='absolute -top-4 -left-4'><IoCheckmarkCircleSharp color='green' size={30} /></div>
                                       }
                                    </div>
                                    <div onClick={() => setDefault(index)} className='text-[10px] font-bold text-green-800 w-[180px] flex justify-center gap-5 cursor-pointer'>
                                       <span>
                                          Set at default
                                       </span>
                                       <span className='text-red-600 cursor-default' onClick={() => handleRemoveImg(index)}>
                                          Remove
                                       </span>
                                    </div>
                                    </div>
                                 )
                              }
                              ) 
                           }
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
   const location = useLocation();
   const [isLoading, setIsLoading] = useState(false)
   const [view , setView] = useState(0)
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();
   const postId = searchParams.get('id'); // 'name'
   const { data } = useGetPostById(postId) 
   const handleSubmit = () => {
      axios.post(import.meta.env.VITE_APP_BACKEND_URL + "update-post", {
         body: postId,
       })
       .then(function (response) {
          setTimeout(() => {
            navigate('/blogs')
             toast.success("Post Published")
          }, 3000)
          toast.success("Post Published");
       })
       .catch(function (error) {
          setIsLoading(false)
          toast.error("Error Uploading , Try Again")
       });
   }
   const handleSave = () => {
      setTimeout(() => {
         navigate('/blogs')
         toast.success("Post saved to draft")
      }, 3000)
      toast.success("Post saved to draft");
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <ToastContainer position="bottom-center" />
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-full md:w-[75%] px-4 md:px-12 p-2 overflow-scroll'>
               <div className='text-sm md:text-md'>
                  <div className='mb-8 flex justify-between'>
                     <div className='bg-white rounded-full items-center shadow-md flex justify-between w-[80%] md:w-[450px] cursor-pointer'>
                        <div  className={`${location.pathname === '/post/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Editor
                        </div>

                        <div  className={`${location.pathname === '/page-setting/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Page Settle
                        </div>

                        <div  className={`${location.pathname === '/status/' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
                           Preview
                        </div>
                     </div>

                     <div className='flex gap-2 cursor-pointer items-center'>
                        <div className='bg-yellow-500 text-white flex px-4 rounded-full p-3 h-full' onClick={handleSave}>
                           Save 
                        </div>
                        <div className='bg-green-500 text-white flex px-4 rounded-full p-3 h-full' onClick={handleSubmit}>
                           Publish 
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

                  <div className='h-[90%]'>
                     {data?.map((item, index) => {
                        return (
                     <div className='h-full flex justify-center items-center flex-col'>
                        <div className='flex gap-5 shadow-lg p-1 rounded-full bg-green-500'>
                           <span onClick={() => setView(0)} className='rounded-full p-2' style={{ background: view == 0 && 'white'}}><MdComputer/></span>
                           <span onClick={() => setView(1)} className='rounded-full p-2' style={{ background: view == 1 && 'white'}}><BsTablet /></span>
                           <span onClick={() => setView(2)} className='rounded-full p-2' style={{ background: view == 2 && 'white'}}><BsPhone /></span>
                        </div>
                        {view == 0 ?
                        <div className='my-6 h-[550px] overflow-scroll w-full bg-white border-8  border-gray-700 shadow-md p-4 rounded-lg'>
                           <div>
                              <div className='md:p-6 px-3 py-6 w-[200px] md:w-[300px]'>
                                 <img src={Logo} alt=""/>
                              </div>
                              <div className='flex flex-col items-center justify-center py-6 md:py-12'>
                                 <div className='flex w-[90%] md:w-[80%]'>
                                    <h3 className='text-[#434343] md:text-[40px] text-[20px] font-bold'>
                                       {item.title}
                                    </h3>
                                 </div>

                                 <div className='w-[80%] mt-4'>
                                    <div className='relative md:h-[540px] h-[300px] w-full rounded-md'>
                                       <div className='w-full absolute md:text-[45px] text-[30px] sm:text-[55px] h-full flex rounded-md justify-center items-center text-center bg-black/70 text-white font-bold'>
                                          <h3 className='w-full'>{item.title}</h3>
                                       </div>
                                       <img src={'/uploads/' + item.featured_img} alt="" className='h-full w-full rounded-md' />
                                    </div>
                                    <div className=''>
                                       <div dangerouslySetInnerHTML={{__html: item.content,}} />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        :
                        <div className='my-6  overflow-scroll h-[550px]  bg-white border-8 border-gray-700 shadow-md p-4 rounded-lg' style={{ width : view == 1 ?  "70%" : "40%"}}>
                           <div className='md:p-6 px-3 py-6 w-[200px] md:w-[300px]'>
                              <img src={Logo} alt="" />
                           </div>
                           <div className='flex flex-col items-center justify-center py-6 md:py-12'>
                              <div className='flex justify-center items-center w-full'>
                                 <h3 className='text-[#434343] md:text-[30px] text-[20px] font-bold'>
                                    {item.title}
                                 </h3>
                              </div>

                              <div className='w-[100%] mt-4'>

                                 <div className='relative md:h-[540px] h-[300px] w-full rounded-md'>
                                    <div className='w-full absolute  text-[30px] sm:text-[55px] h-full flex rounded-md justify-center items-center text-center bg-black/70 text-white font-bold'>
                                       <h3 className='w-full'>{item.title}</h3>
                                    </div>
                                    <img src={'/uploads/' + item.featured_img} alt="" className='h-full w-full rounded-md' />
                                 </div>
                                 <div className=''>
                                    <div dangerouslySetInnerHTML={{__html: item.content,}} />
                                 </div>
                              </div>
                           </div>
                        </div>
                        }
                     </div>
                        )
                     })} 
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
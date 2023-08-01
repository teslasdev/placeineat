import React , {useEffect, useRef, useState} from 'react'
import Sidebar from './Sidebar'
import { BsPencilFill, BsPhone, BsTablet  } from 'react-icons/bs'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { TailSpin } from 'react-loader-spinner';
import {  onPage} from '../../react-redux/reducers/editor'
import { useDispatch, useSelector } from 'react-redux'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useLocation, useNavigate, useParams } from 'react-router-dom'
import convertToBase64  from '../helpers/convert'
import { useGetPostById, useGetPostByslug } from '../helpers/api-hooks/usePost'
import Loader from '../helpers/components/Loader';
import { FormEditor } from './components/formEditor';
import PostPreview from './components/PostPreview';


export const Editor = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();
   const [editTitle , setTitle] = useState(false);
   const [isLoading, setIsLoading] = useState(false)
   const [userInfo, setuserInfo] = useState("");
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
      setuserInfo(
        e.target.value
      );
    }

    const rand = () => {
      let r = (Math.random() + 1).toString(36).substring(2);
      return r 
    }

    const data = {
      postId :  rand(),
      title : userInfo,
      content : description,
   }
    const handleSubmit = () => {
      setIsLoading(true)
      if(userInfo == "") {
         toast.error('Blog Title Can not be Black')
         setIsLoading(false)
      }
      axios.post(import.meta.env.VITE_APP_BACKEND_URL+ "posts", {
        data,
      })
      .then(function (response) {
         setTimeout(() => {
            navigate('/page-setting/' + response.data.id );
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

                  <FormEditor onEditorStateChange={onEditorStateChange} module={module} userInfo={userInfo} onChangeValue={onChangeValue} description={description} />
               </div>
            </div>
         </div>
      </div>
   )
}

export const EditPage = () => {
   const { id  } = useParams()
   const { data, isRunning } = useGetPostById(id)
   const location = useLocation();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false)
   const [userInfo, setuserInfo] = useState("");
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
   if(id == null) {
      navigate("/post")
   }
   const onChangeValue = (e) => {
      setuserInfo(e.target.value);
    }
    const dataForm = {
      title : userInfo,
      content : description,
      slug : data?.slug,
      featured_img : data?.featured_img,
      status : 1,
   }

   useEffect(() =>{
      setDescription(data?.content)
      setuserInfo(data?.title)
   }, [data])
    const handleSubmit = () => {
      setIsLoading(true)
      if(userInfo == "") {
         toast.error('Blog Title Can not be Black')
         setIsLoading(false)
      } else {
         axios.put(import.meta.env.VITE_APP_BACKEND_URL + "posts/"+ id, {
           body: dataForm
         })
         .then(function (response) {
            setTimeout(() => {
               console.log(response)
               navigate('/page-setting/'+ response.data.id);
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
                        <div  className={`${location.pathname === '/edit/:id' && "bg-green-500 text-white"} md:px-6 rounded-full p-3 h-full`}>
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
                  <FormEditor isRunning={isRunning} currentValue={data} onEditorStateChange={onEditorStateChange} module={module} userInfo={userInfo} onChangeValue={onChangeValue} description={description} />
               </div>
            </div>
         </div>
      </div>
   )
}
export const PageSetting = () => {
   const [editTitle , setTitle] = useState(false);
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
   
   const { id } = useParams()
   const { data } = useGetPostById(id);
   useEffect(() => {
     const slugEdited = data?.slug !== null ? data?.slug.replaceAll('-' , ' ') : null;
     setSlug(slugEdited)
   }, [data])
   const handleSubmit = () => {
      const slugEdited = slug.replaceAll(/\s+/g, '-');
      const dataForm = {
         title : data?.title,
         content : data?.content,
         status : 1,
         slug : slugEdited, 
         featured_img : pathFile[defaultImg],
      }
      setIsLoading(true)
      if(slug == "") {
         toast.error("Slug can not be empty")
         setIsLoading(false)
      } 
      else if(files == "") {
         toast.error("Featured Image is required")
         setIsLoading(false)
      }
      else {
         axios.put(import.meta.env.VITE_APP_BACKEND_URL + "posts/" + id, {
           body : dataForm
         })
         .then(function (response) {
            setTimeout(() => {
               navigate('/status/' + slugEdited)
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
                  <div className='mb-8 flex justify-end'>
                     <div className='flex gap-2 cursor-pointer items-center justify-end'>
                        <div className='bg-yellow-500 text-white flex px-4 rounded-full w-[80px] justify-center items-center p-3 h-full' onClick={handleSubmit}>
                        {!isLoading ? "Save" : <Loader /> } 
                        </div>
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
                           <textarea placeholder='E.g https://placetoeat.io/article/(slug)'  onChange={(e) => setSlug(e.target.value)} type="text" style={{resize: "none"}} name="slug" defaultValue={slug} id="" className='bg-transparent border border-gray-200 border-dotted  p-2 outline-none rounded-md mt-4 h-[200px] w-[90%] md:w-[50%]' />
                              
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
   const { slug } = useParams(); // 'name'
   const { data , isRunning } = useGetPostByslug(slug) 
   const [isLoading, setIsLoading] = useState(false)
   const navigate = useNavigate();
   const handleSubmit = () => {
      const dataForm = {
         status : 0,
      }
      console.log(dataForm);
      axios.put(import.meta.env.VITE_APP_BACKEND_URL + "posts/"+ 4, {
         body: dataForm
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
                  <div className='mb-8 flex justify-end'>
                     <div className='flex gap-2 cursor-pointer items-center justify-end'>
                        <div className='bg-yellow-500 text-white flex px-4 rounded-full w-[80px] justify-center items-center p-3 h-full' onClick={handleSave}>
                        {!isLoading ? "Save" : <Loader /> } 
                        </div>
                        <div className='bg-green-500 text-white flex px-4 rounded-full w-[80px] justify-center items-center p-3 h-full' onClick={handleSubmit}>
                        {!isLoading ? "Publish" : <Loader /> }
                        </div> 
                     </div>
                  </div>

                  <div className='h-[90%]'>
                     <PostPreview data={data} isRunning={isRunning}  />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
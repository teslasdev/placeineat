
import React , {useEffect, useRef, useState} from 'react'
import { BsPencilFill, BsPhone, BsTablet  } from 'react-icons/bs'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../helpers/components/Loader';


export const FormEditor = ({
   onEditorStateChange,
   onChangeValue,
   description,
   userInfo,
   module,
   isRunning,
}) => {

  return (
    <div>
      {isRunning ? <Loader /> :
      <>
      <div className='flex items-center text-lg gap-3'>
         <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer'>
            <BsPencilFill size={15} />
         </div>
         <h3 className='w-full'>Title : 
            <input type="text" name="title" value={userInfo} onChange={onChangeValue}  className="bg-transparent border-none outline-none  md:w-[90%]" placeholder="Enter Title" required />
         </h3>
                     
      </div>


      <div className='flex'>
          <div className='flex items-center bg-white shadow-lg  h-[500px] rounded-md mt-4 w-full md:w-[90%]'>
                <div className="p-3 h-[90%] overflow-hidden">
                   <ReactQuill modules={module} theme="snow" value={description} className='h-[90%] pb-5 border-none' onChange={onEditorStateChange}/>
                </div>
          </div>
      </div>
      </>
      }
    </div>
  )
}

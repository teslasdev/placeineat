import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Auth from '../Auth'
import { getToken } from '../../helpers/components/Token'
import { IoClose } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { BsPencilFill } from 'react-icons/bs'
import axios from 'axios'


const System = () => {
   const [isOpen , setisOpen] = useState(false)
   const [isOpenFeature , setisOpenFeature] = useState(false)
   const token = getToken()
   const [textValue , setValue] = useState("")
   useEffect(() => {
      axios.get(import.meta.env.VITE_APP_BACKEND_URL+"prompt/1").then((res) => {
         setValue(res.data.data.prompt)
      })
   },[])
   const handleSubmit = (e) => {
      const data = {
         prompt : textValue
      }
      if(textValue == '') {
         toast.error('Prompt Area cannot be blank');
         return
      } 
      try {
         axios.put(import.meta.env.VITE_APP_BACKEND_URL+"prompt/1" , data).then((res) => {
            toast.success(res.data.message)
         })
      } catch (error) {
         throw new Error(error);
      }
   };
   const handleChange = (value) => {
      let string2 = textValue.replace(textValue , textValue +" " + value)
      setValue(string2)
   }
   if(!token) {
     return <Auth />
   }
   return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
          <ToastContainer />
         <div className='flex h-full'>
            <Sidebar isOpen={isOpen} />
            <div className='flex fixed top-1 text-green-500 left-1 bg-gray-200 rounded-full border-none opacity-1 z-10' style={{ display : !isOpen && 'none'}} onClick={() => setisOpen(false)}>
               <IoClose  size={30} />
            </div>
            <div className='md:w-[75%] w-full md:px-12 p-4'>
               <div className='text-md'>
                  <div className='flex justify-between items-center gap-2'>
                     <div className='text-md'>
                        <div className='flex items-center gap-2'>
                           <div className='md:hidden block' onClick={() => setisOpen(!isOpen)}><FaBars /></div>
                           <h3>System Preference</h3>
                        </div>
                     </div>
                  </div>
                  <div className='flex flex-col gap-6 my-5 w-[100%]'>
                     <div className='flex items-center text-lg gap-3'>
                        <div className='w-[25px] h-[25px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white cursor-pointer' onClick={() => setTitle(!editTitle)}>
                           <BsPencilFill size={15} />
                        </div>
                           <h3 className='text-sm'>Prompt <span className='text-red-600'>*</span></h3>
                     </div>
                     <p className='bg-red-300 text-white w-full md:w-[80%] p-2 rounded-md'>Note!!! Prompt is based on the selected preferences. Avoid removing the [bracket] after you included</p>
                     <div className='relative w-full flex'>
                        <textarea value={textValue} name="prompt" onChange={(e) => setValue(e.target.value)} onClick={() => setisOpenFeature(!isOpenFeature)} className='w-full md:w-[80%] h-[150px] rounded-md shadow-md border-none outline-none p-4' style={{resize:"none"}}></textarea>
                        <div className='w-[30px] flex justify-center items-center text-white h-[30px] rounded-md shadow-sm bg-green-500 cursor-pointer' onClick={() => setisOpenFeature(!isOpenFeature)}>*</div>
                        {isOpenFeature &&
                        <div className='absolute -bottom-40 bg-gray-100 rounded-md p-2 w-full md:w-[80%] min-h-[160px] cursor-pointer'>
                           <li className='bg-green-500 rounded-sm shadow-md p-2 m-2 text-white hover:bg-green-400' onClick={() => handleChange("[Search City by User]")}>Search City by User</li>
                           <li className='bg-green-500 rounded-sm shadow-md p-2 m-2 text-white hover:bg-green-400' onClick={() => handleChange("[Preferences]")}>Preferences</li>
                           <li className='bg-green-500 rounded-sm shadow-md p-2 m-2 text-white hover:bg-green-400' onClick={() => handleChange("[Cuisine]")}>Cuisine</li>
                        </div>
                        }
                     </div>

                     <div className="w-full md:w-[20%]"> 
                        <div className="bg-green-500 rounded-full h-[40px] flex items-center justify-center text-white text-sm cursor-pointer" onClick={handleSubmit}>
                           {'Save'}
                        </div>
                     </div>
                        
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default  System 

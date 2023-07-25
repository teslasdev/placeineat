import React, { useState } from 'react'
import { AiOutlineEye , AiFillDelete} from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { useSelector , useDispatch } from 'react-redux';
import { modalSelector , toggleDeleteModal } from '../../react-redux/reducers/modal';
import LogoutModal from '../../general/Modal/LogoutModal';
import DeleteModal from '../../general/Modal/DeleteModal'
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import {useGetPost} from '../helpers/api-hooks/usePost';
import { getToken } from '../helpers/components/Token';

import Auth from './Auth';
import { IoClose } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';


const Blogs = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const { logoutModalOpen, DeleteModalOpen } = useSelector(modalSelector);
   const {data} = useGetPost()
   const token = getToken()
   const [isOpen , setisOpen] = useState(false)
   if(!token) {
     return <Auth />
   }
  return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <div className='flex h-full'>
            <Sidebar isOpen={isOpen} />
               <div className='flex fixed top-1 text-green-500 left-1 bg-gray-200 rounded-full border-none opacity-1 z-10' style={{ display : !isOpen && 'none'}} onClick={() => setisOpen(false)}>
                  <IoClose size={30} />
               </div>
               <div className='md:w-[75%] w-full md:px-12 p-4 overflow-scroll'>
                  <div className='flex items-center justify-between'>
                     <div className='text-md'>
                        <div className='flex items-center gap-2'>
                           <div className='md:hidden block' onClick={() => setisOpen(!isOpen)}><FaBars /></div>
                           <h3>Dashboard</h3>
                        </div>
                     </div>
                     <div>
                        <Link to='/post' className='rounded-full bg-green-500 px-4 py-2 text-white'>Add New</Link>
                     </div>
                  </div>
                  <div className='flex flex-wrap gap-6 justify-center'>
                     {data?.map((item, index) => {
                        return (
                           <div className='flex py-10 gap-3' key={index}>
                           <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                              <img
                                 src={'/uploads/' + item.featured_img}
                                 className="w-full h-full rounded-md shadow-lg object-cover"
                                 alt="Post Image"
                                 
                              />
                              {item.status == 2 ?
                                 <span className='bg-green-500 text-white px-3 rounded-full text-sm mt-4'>Published</span>
                              :
                                 <span className='bg-yellow-500 text-white px-3 rounded-full text-sm mt-4'>{item.status == 1 ? 'Draft' : 'Editor'}</span>
                              }
                           </div>
                           <div className='flex gap-2 flex-col cursor-pointer'>
                              <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white' onClick={() => navigate('/status/?id=' + item.post_id)}>
                                 <AiOutlineEye size={20} />
                              </div>
   
                              <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white' onClick={() => navigate('/edit/?id=' + item.post_id)}>
                                 <BsPencilFill size={20} />
                              </div>
   
                              <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'
                                 onClick={() => {
                                    dispatch(
                                       toggleDeleteModal({
                                         data: {
                                          modalState : true,
                                          blogID : item.post_id
                                         }
                                       })
                                    )}
                                 }
                              >
                                 <AiFillDelete size={20} />
                              </div>
                           </div>
                        </div>
                        )
                     })}
               
                  </div>
              
            </div>
         </div>

         {logoutModalOpen && <LogoutModal />}
         {DeleteModalOpen && <DeleteModal />}

         
      </div> 
  )
}

export default Blogs
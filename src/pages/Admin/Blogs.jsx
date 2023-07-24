import React, { useEffect, useState } from 'react'
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


const Blogs = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const { logoutModalOpen, DeleteModalOpen } = useSelector(modalSelector);
   const {data} = useGetPost()
   const token = getToken()
   if(!token) {
     return <Auth />
   }
  return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-full md:w-[75%] px-4 md:px-12 p-2 overflow-scroll'>
               <div className='text-md'>
                  <div className='flex justify-between mb-12 mt-4'>
                     <h3 className='text-md'>Dashbaord</h3>
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
         </div>

         {logoutModalOpen && <LogoutModal />}
         {DeleteModalOpen && <DeleteModal />}

         
      </div> 
  )
}

export default Blogs
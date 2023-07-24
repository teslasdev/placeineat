import React, { useEffect, useState } from 'react'
import { AiOutlineEye , AiFillDelete} from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { useSelector , useDispatch } from 'react-redux';
import { modalSelector , toggleDeleteModal } from '../../react-redux/reducers/modal';
import LogoutModal from '../../general/Modal/LogoutModal';
import DeleteModal from '../../general/Modal/DeleteModal'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import {useGetPost} from '../helpers/api-hooks/usePost';
import Loader from '../helpers/components/Loader';
const Dashboard = () => {
   const { logoutModalOpen, DeleteModalOpen } = useSelector(modalSelector);
   const { data ,isLoading } = useGetPost()
  return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-[75%] px-12 p-2 overflow-scroll'>
               <div className='text-md'>
                  <h3>Dashboard</h3>

                  <div className='flex flex-wrap gap-6 my-5'>
                     <div className='w-[450px] h-[200px] p-6 rounded-lg bg-green-300'>
                        <h3 className='text-white text-xl font-medium'>Posts</h3>
                        <h1 className='text-5xl text-white mt-2 font-bold'>{isLoading ? <Loader/> : data.length}</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {logoutModalOpen && <LogoutModal />}
         {DeleteModalOpen && <DeleteModal />}
      </div> 
  )
}

export default Dashboard
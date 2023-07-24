import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { modalSelector , toggleDeleteModal } from '../../react-redux/reducers/modal';
import LogoutModal from '../../general/Modal/LogoutModal';
import DeleteModal from '../../general/Modal/DeleteModal'
import Sidebar from './Sidebar';
import {useGetPost} from '../helpers/api-hooks/usePost';
import Loader from '../helpers/components/Loader';
import { getToken } from '../helpers/components/Token';
import Auth from './Auth';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
const Dashboard = () => {
   const { logoutModalOpen, DeleteModalOpen } = useSelector(modalSelector);
   const { data ,isLoading } = useGetPost()
   const [isOpen , setisOpen] = useState(false)
   const token = getToken()
   if(!token) {
     return <Auth />
   }
  return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <div className='flex h-full'>
            <Sidebar isOpen={isOpen} />
            <div className='flex fixed top-1 text-green-500 left-1 bg-gray-200 rounded-full border-none opacity-1 z-10' style={{ display : !isOpen && 'none'}} onClick={() => setisOpen(false)}>
               <IoClose  size={30} />
            </div>
            <div className='md:w-[75%] w-full md:px-12 p-4 overflow-scroll'>
               <div className='text-md'>
                  <div className='flex items-center gap-2'>
                     <div className='md:hidden block' onClick={() => setisOpen(!isOpen)}><FaBars /></div>
                     <h3>Dashboard</h3>
                  </div>
                  <div className='flex flex-wrap gap-6 my-5 w-[100%]'>
                     <div className='md:w-[450px] w-[600px] h-[200px] p-6 rounded-lg bg-green-300'>
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
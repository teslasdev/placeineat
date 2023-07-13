import React, { useState } from 'react'
import'./global.css';
import { AiOutlineEye , AiFillDelete} from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { useSelector , useDispatch } from 'react-redux';
import { modalSelector , toggleDeleteModal } from '../../react-redux/reducers/modal';
import LogoutModal from '../../general/Modal/LogoutModal';
import DeleteModal from '../../general/Modal/DeleteModal'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const { logoutModalOpen, DeleteModalOpen } = useSelector(modalSelector);
   const [tabs , setTabs] = useState(0)

   const handlePreview = () => {
      navigate('/post')
   }
  return (
      <div className='bg-[#f3fff5] h-screen fixed w-full p-4'>
         <div className='flex h-full'>
            <Sidebar />
            <div className='w-[75%] px-12 p-2 overflow-scroll'>
               <div className='text-md'>
                  <h3>Dashboard</h3>

                  <div className='flex flex-wrap gap-6 justify-center'>
                     <div className='flex py-10 gap-3'>
                        <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                           <img
                              src="/images/restaurant.jpg"
                              className="w-full h-full rounded-md shadow-lg object-cover"
                              alt=""
                              srcset=""
                           />
                           <span className='bg-yellow-500 text-white px-3 rounded-full text-sm mt-4'>Draft</span>
                        </div>
                        <div className='flex gap-2 flex-col cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white' onClick={handlePreview}>
                              <AiOutlineEye size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsPencilFill size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'
                              onClick={() => {
                                 dispatch(
                                    toggleDeleteModal({
                                      data: {
                                       modalState : true,
                                       blogID : ""
                                      }
                                    })
                                 )}
                              }
                           >
                              <AiFillDelete size={20} />
                           </div>
                        </div>
                     </div>

                     <div className='flex py-10 gap-3'>
                        <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                           <img
                              src="/images/restaurant.jpg"
                              className="w-full h-full rounded-md shadow-lg object-cover"
                              alt=""
                              srcset=""
                           />
                            <span className='bg-green-500 text-white px-3 rounded-full text-sm mt-4'>Published</span>
                        </div>
                        <div className='flex gap-2 flex-col cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineEye size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsPencilFill size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiFillDelete size={20} />
                           </div>
                        </div>
                     </div>


                     <div className='flex py-10 gap-3'>
                        <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                           <img
                              src="/images/restaurant.jpg"
                              className="w-full h-full rounded-md shadow-lg object-cover"
                              alt=""
                              srcset=""
                           />
                           <span className='bg-yellow-500 text-white px-3 rounded-full text-sm mt-4'>Draft</span>
                        </div>
                        <div className='flex gap-2 flex-col cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineEye size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsPencilFill size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiFillDelete size={20} />
                           </div>
                        </div>
                     </div>

                     <div className='flex py-10 gap-3'>
                        <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                           <img
                              src="/images/restaurant.jpg"
                              className="w-full h-full rounded-md shadow-lg object-cover"
                              alt=""
                              srcset=""
                           />
                           <span className='bg-yellow-500 text-white px-3 rounded-full text-sm mt-4'>Draft</span>
                        </div>
                        <div className='flex gap-2 flex-col cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineEye size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsPencilFill size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiFillDelete size={20} />
                           </div>
                        </div>
                     </div>



                     <div className='flex py-10 gap-3'>
                        <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                           <img
                              src="/images/restaurant.jpg"
                              className="w-full h-full rounded-md shadow-lg object-cover"
                              alt=""
                              srcset=""
                           />
                           <span className='bg-yellow-500 text-white px-3 rounded-full text-sm mt-4'>Draft</span>
                        </div>
                        <div className='flex gap-2 flex-col cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineEye size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsPencilFill size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiFillDelete size={20} />
                           </div>
                        </div>
                     </div>



                     <div className='flex py-10 gap-3'>
                        <div className='bg-white shadow-md rounded-md w-[250px] h-[300px]'>
                           <img
                              src="/images/restaurant.jpg"
                              className="w-full h-full rounded-md shadow-lg object-cover"
                              alt=""
                              srcset=""
                           />
                           <span className='bg-yellow-500 text-white px-3 rounded-full text-sm mt-4'>Draft</span>
                        </div>
                        <div className='flex gap-2 flex-col cursor-pointer'>
                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiOutlineEye size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <BsPencilFill size={20} />
                           </div>

                           <div className='w-[40px] h-[40px] bg-green-600 rounded-full flex justify-center items-center shadow-md text-white'>
                              <AiFillDelete size={20} />
                           </div>
                        </div>
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
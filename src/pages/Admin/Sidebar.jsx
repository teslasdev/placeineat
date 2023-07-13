import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { ImBlog } from 'react-icons/im'
import { FiLogOut } from 'react-icons/fi'
import Logo from "../../assets/logoplacetoeat.png";
import { toggleLogoutModal } from '../../react-redux/reducers/modal';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
   const dispatch = useDispatch();
  return (
      <div className='relative w-[20%] p-4 flex flex-col  h-full rounded-md bg-white shadow-md'>
         <div className="w-[150px] md:w-[200px]">
            <img src={Logo} alt="" srcset="" />
         </div>
         <nav className='p-3 py-8 flex flex-col gap-6'>
            <li className='flex justify-start bg-[#e8ffed] p-3 rounded-md'>
               <Link to="" className='flex items-center gap-6'>
                  <span className='text-gray-500'><RxDashboard size={25} /></span>
                  <span className='text-sm text-gray-400'>Dashboard</span>
               </Link>
            </li>
            <li className='flex justify-start hover:bg-[#e8ffed] p-3 rounded-md'>
               <Link to="" className='flex items-center gap-8'>
                  <span className='text-gray-500'><ImBlog size={20} /></span>
                  <span className='text-sm text-gray-400'>Blog</span>
               </Link>
            </li>
         </nav>
         <div className='absolute bottom-0 px-6 py-10 cursor-pointer' 
            onClick={() => {
                  dispatch(
                     toggleLogoutModal({
                       data: true
                     })
                   )
               }
            }>
            <div className='flex items-center gap-4'>
               <span className='font-bold text-red-500'><FiLogOut size={20} /></span>
               <span className='text-sm text-red-500'>Log Out</span>
            </div>
         </div>
      </div>
  )
}

export default Sidebar
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { ImAccessibility, ImBlog, ImUser, ImUsers } from 'react-icons/im'
import { FiLogOut } from 'react-icons/fi'
import Logo from "../../assets/logoplacetoeat.png";
import { toggleLogoutModal } from '../../react-redux/reducers/modal';
import { useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5'
import { BsCassetteFill, BsPieChart } from 'react-icons/bs'
import { MdLocationCity, MdOutlineRoomPreferences } from 'react-icons/md'


const Sidebar = ({isOpen}) => {
   const dispatch = useDispatch();
   const location = useLocation();
  return (
      <div className='relative hidden w-[25%] p-4 md:flex flex-col  h-full rounded-md bg-white shadow-md' style={{ width : isOpen && '60%' , position : isOpen && "fixed" , display : isOpen && "flex"}}>
         <div className="w-[100px] md:w-[200px]">
            <img src={Logo} alt="Logo" />
         </div>
         <nav className='p-3 py-8 flex flex-col gap-6'>
            <li className={`${location.pathname === '/dashboard' && "bg-[#e8ffed]"} flex justify-start p-3 rounded-md }`}>
               <Link to="/dashboard"   className='flex items-center gap-6'>
                  <span className='text-gray-500'><RxDashboard size={25} /></span>
                  <span className='text-sm text-gray-400'>Dashboard</span>
               </Link>
            </li>
            <li className={`${location.pathname === '/blogs' && "bg-[#e8ffed]"} flex justify-start   p-3 rounded-md }`}>
               <Link to="/blogs" className='flex items-center gap-8'>
                  <span className='text-gray-500'><ImBlog size={20} /></span>
                  <span className='text-sm text-gray-400'>Blogs</span>
               </Link>
            </li>
            <li className={`${location.pathname === '/manage-cities' && "bg-[#e8ffed]"} flex justify-start   p-3 rounded-md }`}>
               <Link to="/manage-cities" className='flex items-center gap-8'>
                  <span className='text-gray-500'><ImAccessibility size={20} /></span>
                  <span className='text-sm text-gray-400'>Manage Cities</span>
               </Link>
            </li>
            <li className={`${location.pathname === '/manage-preference' && "bg-[#e8ffed]"} flex justify-start   p-3 rounded-md }`}>
               <Link to="/manage-preference" className='flex items-center gap-8'>
                  <span className='text-gray-500'><MdOutlineRoomPreferences size={20} /></span>
                  <span className='text-sm text-gray-400'>Manage Preferences</span>
               </Link>
            </li>
            <li className={`${location.pathname === '/manage-cuisine' && "bg-[#e8ffed]"} flex justify-start   p-3 rounded-md }`}>
               <Link to="/manage-cuisine" className='flex items-center gap-8'>
                  <span className='text-gray-500'><MdLocationCity size={20} /></span>
                  <span className='text-sm text-gray-400'>Manage Cuisines</span>
               </Link>
            </li>

            <li className={`${location.pathname === '/manage-users' && "bg-[#e8ffed]"} flex justify-start   p-3 rounded-md }`}>
               <Link to="/blogs" className='flex items-center gap-8'>
                  <span className='text-gray-500'><ImUsers size={20} /></span>
                  <span className='text-sm text-gray-400'>Manage Users</span>
               </Link>
            </li>
            <li className={`${location.pathname === '/system-preference' && "bg-[#e8ffed]"} flex justify-start   p-3 rounded-md }`}>
               <Link to="/system-preference" className='flex items-center gap-8'>
                  <span className='text-gray-500'><BsPieChart size={20} /></span>
                  <span className='text-sm text-gray-400'>System Preference</span>
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
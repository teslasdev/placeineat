import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Auth from '../Auth'
import { getToken } from '../../helpers/components/Token'
import { IoClose } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import TableRow from '../components/TableRow'
import { modalSelector, toggleOpenModal } from '../../../react-redux/reducers/modal'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { useGetCuisine } from '../../helpers/api-hooks/useCuisine'
import AddModalCuisine from '../../../general/Modal/AddModalCuisine'

const Cuisine = () => {
   const dispatch = useDispatch();
   const [isOpen , setisOpen] = useState(false)
   const {  OpenModal } = useSelector(modalSelector);
   const token = getToken()
   if(!token) {
     return <Auth />
   }

   const {data , isLoading} = useGetCuisine(1);
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
                           <h3>Cities</h3>
                        </div>
                     </div>
                     <div>
                        <div onClick={() => {
                           dispatch(
                              toggleOpenModal({
                                data: {
                                 modalState : true,
                                 id : ""
                                }
                              })
                           )}
                        }  className='rounded-full bg-green-500 px-4 py-2 text-white cursor-pointer'>Add New</div>
                     </div>
                  </div>
                  <div className='flex flex-wrap gap-6 my-5 w-[100%]'>
                     <TableRow isLoading={isLoading} data={data} isSimple="true" />
                  </div>
               </div>
            </div>
         </div>
         {OpenModal && <AddModalCuisine/> }
      </div>
   )
}

export default Cuisine
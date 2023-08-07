import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useGetCity } from '../../helpers/api-hooks/useCity'
import Loader from '../../helpers/components/Loader'
import { format } from "date-fns";
import { modalSelector, toggleDeleteModal } from '../../../react-redux/reducers/modal';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../../../general/Modal/DeleteModal';

const TableRow = ({
   data,
   isLoading,
   isSimple
}) => {
  const dispatch = useDispatch()
  const {DeleteModalOpen} = useSelector(modalSelector)
  const [isOpen , setOpen] = useState({})
  return (
    <div className='w-full overflow-x-scroll h-screen overflow-y-scroll'>
      <table className='w-full'>
         <thead>
            <tr className='flex bg-green-500 p-4 w-full justify-around text-white rounded-t-xl font-normal'>
               <th>Name</th>
               <th>Status</th>
               <th>Created</th>
               <th>Action</th>
            </tr>
         </thead>
      

         {isLoading ?? <Loader />}
         <div className='h-[70vh]  overflow-scroll'>
         {data && data.map((item, index) => {
            return (
               <tr className='flex w-[100%] justify-around  border-b-white border-b-4 items-center text-sm bg-gray-100 p-4 text-black font-normal' key={index}>
                  <td>{item.name.toUpperCase()}</td>
                  <td className={`${item.status ? "bg-green-500": 'bg-yellow-500' } p-2 rounded-full text-white`}>{item.status ? 'Published' : 'Draft'}</td>
                  <td>{format(new Date(item.createdAt), "dd MMMM,yyyy")}</td>
                  <td className='relative cursor-pointer' onClick={() => setOpen({
                     [index] : !isOpen[index]
                  })}><BsThreeDots />
                     {isOpen[index] && 
                     <div className='absolute p-2 z-10 text-xs flex flex-col gap-2 rounded-md left-10 top-5 w-[100px] bg-white'>
                        {isSimple ? 
                           <>
                              <li>Edit</li>
                              <li onClick={() => {
                                    dispatch(
                                       toggleDeleteModal({
                                         data: {
                                          modalState : true,
                                          blogID : item.id
                                         }
                                       })
                                    )}
                                 }
                              >Delete</li>
                           </>
                          :
                           <>
                              <li>View Image</li>
                              <li>Edit</li>
                              <li onClick={() => {
                                    dispatch(
                                       toggleDeleteModal({
                                         data: {
                                          modalState : true,
                                          blogID : item.id
                                         }
                                       })
                                    )}
                                 }
                              >Delete</li>
                           </>
                        }
                        
                     </div>
                     }
                  </td>
               </tr>
              
            )
         })}
         </div>
      </table>
      {isSimple ? DeleteModalOpen && <DeleteModal type="preference/" /> : DeleteModalOpen && <DeleteModal type="cities/" /> }
    </div>
  )
}

export default TableRow
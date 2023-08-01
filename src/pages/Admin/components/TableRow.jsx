import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useGetCity } from '../../helpers/api-hooks/useCity'
import Loader from '../../helpers/components/Loader'
import { format } from "date-fns";

const TableRow = ({
   data,
   isLoading
}) => {
  const [isOpen , setOpen] = useState({})
  return (
    <div className='w-full overflow-x-scroll h-screen overflow-y-hidden'>
      <table className='w-full'>
         <tr className='flex bg-green-500 p-4 w-full justify-around text-white rounded-t-xl font-normal'>
            <th>City Name</th>
            <th>Status</th>
            <th>Created</th>
            <th>Action</th>
         </tr>

         {isLoading ?? <Loader />}
         {data && data.map((item, index) => {
            return (
               <tr className='flex w-[100%] justify-around border-b-white border-b-4 items-center text-sm bg-gray-100 p-4 text-black font-normal' key={index}>
                  <td>{item.name.toUpperCase()}</td>
                  <td className={`${item.status ? "bg-green-500": 'bg-yellow-500' } p-2 rounded-full text-white`}>{item.status ? 'Published' : 'Draft'}</td>
                  <td>{format(new Date(item.createdAt), "dd MMMM,yyyy")}</td>
                  <td className='relative cursor-pointer' onClick={() => setOpen({
                     [item.name] : !isOpen[item.name]
                  })}><BsThreeDots />
                     {isOpen[item.name] && 
                     <div className='absolute p-2 z-10 text-xs flex flex-col gap-2 rounded-md left-10 top-5 w-[100px] bg-white'>
                        <li>View Image</li>
                        <li>Edit</li>
                        <li>Delete</li>
                     </div>
                     }
                  </td>
               </tr>
            )
         })}
      </table>
    </div>
  )
}

export default TableRow
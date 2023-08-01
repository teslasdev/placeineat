import React from 'react'
import Logo from '../../assets/logoplacetoeat.png'
import { useParams } from 'react-router-dom'
import { useGetPostByslug } from '../helpers/api-hooks/usePost'
import Loader from '../helpers/components/Loader'

const Article = () => {
   const { slug } = useParams()

   const { data , isLoading } = useGetPostByslug(slug)
   console.log(data)
  return (
      <div className='bg-white'>
         <div className='md:p-6 px-3 py-6 w-[200px] md:w-[300px]'>
            <img src={Logo} alt=""  />
         </div>


         {isLoading ? <Loader/> : data?.map((item , index ) => {
         return (
         <div className='flex flex-col items-center justify-center py-6 md:py-12'>
            <div className='flex justify-start items-start w-[90%] md:w-[65%]'>
               <h3 className='text-[#434343] md:text-[40px] text-[20px] font-bold'>{item.title}</h3>
            </div>

            <div className='w-[90%] md:w-[65%] mt-4'>
               <div className='relative md:h-[540px] h-[300px] w-full rounded-md'>
                  <div className='w-full absolute md:text-[45px] text-[30px] sm:text-[45px] h-full flex rounded-md justify-center items-center text-center bg-black/70 text-white font-bold'>
                     <h3 className='w-full'>{item.title}</h3>
                  </div>
                  <img src={'/uploads/' + item.featured_img} alt="" className='h-full w-full rounded-md' />
               </div>
            </div>

            <div className='flex justify-center w-[90%] md:w-[65%] flex-col gap-6 my-6'>
               <div dangerouslySetInnerHTML={{__html: item.content,}} />
            </div>

         </div>   
         )
         })}
    </div>
  )
}

export default Article
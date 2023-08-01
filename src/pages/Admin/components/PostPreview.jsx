import React from 'react'
import Logo from '../../../assets/logoplacetoeat.png'
import Loader from '../../helpers/components/Loader'

const PostPreview = ({
   data,
   isRunning
}) => {
   return (
      <div className='h-full flex justify-center items-center flex-col'>
         {isRunning && <Loader />}
         { data && data.map((item , index) => {
         return (
            <div className='my-6 h-[550px] overflow-scroll w-full bg-white border-8  border-gray-700 shadow-md p-4 rounded-lg' key={index}>
               <div>
                  <div className='md:p-6 px-3 py-6 w-[200px] md:w-[300px]'>
                     <img src={Logo} alt=""/>
                  </div>
                  <div className='flex flex-col items-center justify-center py-6 md:py-12'>
                     <div className='flex w-[100%] md:w-[80%]'>
                        <h3 className='text-[#434343] md:text-[40px] text-[20px] font-bold'>
                           {item.title}
                        </h3>
                     </div>
               
                     <div className='w-[100%] md:w-[80%] mt-4'>
                        <div className='relative md:h-[540px] h-[300px] w-full rounded-md'>
                           <div className='w-full absolute md:text-[45px] text-[30px] sm:text-[55px] h-full flex rounded-md justify-center items-center text-center bg-black/70 text-white font-bold'>
                              <h3 className='w-full'>{item.title}</h3>
                           </div>
                           <img src={'/uploads/' + item.featured_img} alt="" className='h-full w-full rounded-md' />
                        </div>
                        <div className=''>
                           <div dangerouslySetInnerHTML={{__html: item.content,}} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            )})}
      </div>
   )
}

export default PostPreview
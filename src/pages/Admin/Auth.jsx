import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { setToken } from '../helpers/components/Token';

const Auth = () => {
   const [email , setEmail] = useState('')
   const [password , setPassword] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const navigate = useNavigate();

   const handleSubmit = () => {
      setIsLoading(true)
      if(email == "") {
         setIsLoading(false)
         toast.error('Email Address can not be blank');
      } else if(password == "") {
         toast.error('Password can not be blank');
      }

      else {
         const data = {
            email : email,
            password : password
         }

         axios.post(import.meta.env.VITE_APP_BACKEND_URL+"auth/signin", 
            {
               data
            }, 
            {
               headers:  { 
                  "content-type": "application/json" 
               }
            }
         )
         .then(function (response) {
            console.log(response)
            if(response.data.success) {
               setToken(response.data.accessToken)
               toast.success("Logged In Successfully");
               setTimeout(() => {
                  window.location.reload();
               }, 3000);
            } else {
               toast.error(response.data.message);
            }
         })
         .catch(function (error) {
            setIsLoading(false)
            toast.error("Error, Try Again")
         });
      }
   }
   return (
      <div className='flex justify-center items-center w-full h-screen bg-green-600'>
         <ToastContainer />
         <div className='p-4 w-[500px] rounded-lg bg-white shadow-md h-[300px]'>
            <h3 className='uppercase text-gray-600'>Control Panel</h3>

            <div className='mt-10 flex flex-col gap-4'>
               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-full shadow-md bg-white w-full h-[50px] p-2 border border-gray-500 outline-none' placeholder='Enter Email Address'/>
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-full shadow-md bg-white w-full h-[50px] p-2 border border-gray-500 outline-none' placeholder='Enter Password' />
               <button className='bg-green-500 rounded-full h-[50px] text-white' onClick={handleSubmit}>{isLoading ? "Loading..." : 'Login'}</button>
            </div>
         </div>
      </div> 
   )
}

export default Auth
import React from 'react'
import Logo from '../../assets/logoplacetoeat.png'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight ,AiOutlineArrowLeft} from 'react-icons/ai'
import {RxCaretRight} from 'react-icons/rx'

const Article = () => {
  return (
    <div className='bg-white'>
         <div className='md:p-6 px-3 py-6 w-[200px] md:w-[300px]'>
            <img src={Logo} alt="" srcset="" />
         </div>


         <div className='flex flex-col items-center justify-center py-6 md:py-12'>
            <div className='flex justify-center items-center w-[90%] md:w-[65%]'>
               <h3 className='text-[#434343] md:text-[40px] text-[20px] font-bold'>Best Places to Eat in London for Vegetarians</h3>
            </div>

            <div className='w-[90%] md:w-[65%] mt-4'>
               <p className='text-sm py-3'>London is home to the best vegetarian food in England. Try these places for a healthy bite to eat.</p>
               <div className='relative md:h-[540px] h-[300px] w-full rounded-md'>
                  <div className='w-full absolute md:text-[75px] text-[50px] sm:text-[55px] h-full flex rounded-md justify-center items-center text-center bg-black/70 text-white font-bold'>
                     <h3 className='w-full'>LONDON FOR VEGETARIANS</h3>
                  </div>
                  <img src="/images/restaurant1.jpg" alt="" className='h-full w-full rounded-md' />
               </div>
            </div>

            <div className='flex justify-center w-[90%] md:w-[65%] flex-col gap-6 my-6'>
               <h3 className='text-[#434343] md:text-[30px] text-[20px] font-bold'>Restaurants in London with Green Pastures</h3>

               <p className='text-sm font-normal'>Are you a vegetarian planning to visit London? You're in luck! The city offers a vibrant culinary scene with a wide array of vegetarian options. Whether you're a seasoned herbivore or simply looking to explore meat-free cuisine, London has something for everyone. In this listicle, we'll guide you through the top eight restaurants in London that cater to vegetarians. Get ready to tantalize your taste buds and discover delicious plant-based dishes in the heart of the city.</p>
               <div className='md:h-[540px] h-[300px] w-full rounded-md'>
                  <img src="/images/restaurant.jpg" alt="" className='h-full w-full rounded-md' />
               </div>
               <p><b>Mildreds ($$$)</b> <br>
               </br>Maintaining a Culinary Legacy
               <br>
               </br>Mildreds is a renowned vegetarian restaurant located in the vibrant neighborhood of Soho. With its cozy atmosphere and innovative menu, it has become a favorite among locals and tourists alike. From their mouthwatering Sri Lankan sweet potato curry to the indulgent smoked tofu burger, Mildreds offers a diverse range of flavors that will leave you craving more. Don't forget to try their heavenly vegan desserts, which are the perfect ending to a delightful meal.</p>

               <div className='md:h-[540px] h-[300px] w-full rounded-md'>
                  <img src="/images/restaurant.jpg" alt="" className='h-full w-full rounded-md' />
               </div>
               <p><b>The Gate</b> <br>
               </br>An Exquisite Fusion of Flavors
               <br>
               </br>
Nestled in the trendy neighborhood of Marylebone, The Gate showcases an exquisite fusion of vegetarian and vegan cuisine. This award-winning restaurant prides itself on creating innovative dishes using seasonal and organic ingredients. Indulge in their renowned miso-glazed aubergine or sample their flavorful beetroot tartare. With a stylish ambiance and impeccable service, The Gate guarantees a memorable dining experience.</p>
            </div>

         </div>   
    </div>
  )
}

export default Article
import React from "react";
import Logo from "../../assets/logoplacetoeat.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { RxCaretRight } from "react-icons/rx";


const Blog = () => {
  const images = [
    {
      image: "/5-food-trends-2019-no-title.jpeg",
      width: "159.44px",
      height: "279.06px",
    },
    {
      image: "/the-eatery-ground-floor.jpeg",
      width: "159.44px",
      height: "412.25px",
    },
    {
      image: "/comfort-foods.jpeg",
      width: "159.44px",
      height: "290.7px",
    },
  ];
  return (
    <div className="bg-white">
      <div className="p-6 w-[200px] md:w-[300px]">
        <img src={Logo} alt="" srcset="" />
      </div>

      <div className="md:h-[500px] h-[250px] md:p-24 p-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-[40%]">
          <h3 className="md:text-[55px] text-[40px] font-[700] text-[#5DCE76]">
            Let’s discover
          </h3>
          <h4 className="md:text-[55px] text-[35px] font-[400] text-[#5DCE76]">
            your next meal
          </h4>
          <p className="tex-[22px] font-[400] mt-2">
            Life is too short to not eat great food. In this blog, we list some
            of our favorite places to eat around the world.{" "}
          </p>
        </div>

        <div className="w-[60%] md:flex hidden gap-4 justify-center items-center -rotate-[23.45deg]">
          {images.map((item, index) => {
            return (
              <div className="shadow-sm bg-transparent rounded-full">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-full object-cover"
                  style={{ width: item.width, height: item.height }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:h-[493px] flex flex-col md:flex-row md:p-24 p-6 gap-6">
        <div className="md:w-[503px] bg-gray-200 h-[338px] rounded-md">
          <img
            src="/images/restaurant.jpg"
            className="w-full h-full rounded-md shadow-lg object-cover"
            alt=""
            srcset=""
          />
        </div>

        <div className="md:w-[503px] flex flex-col md:p-4 h-[338px]">
          <h3 className="text-[#284C63] text-[18px]">
            Featured FOOD DESTINATION
          </h3>
          <h1 className="md:text-[40px] text-[30px] font-bold text-[#434343]">
            Best Places to Eat in NYC
          </h1>
          <p className="text-[#434343] text-sm md:text-md">
            Visiting NYC or just feeling hungry for something new? Want to
            discover some hip, new restaurants in The Big Apple? Read this blog
            article and get ready to hear that belly grumble.{" "}
          </p>
          <Link className="text-[#8A53FF] text-[16px] mt-6">Discover</Link>
        </div>
      </div>

      <div className="md:h-[563px] bg-[#F5F5F5] flex flex-col justify-between md:p-12">
        <div className="flex justify-center items-center">
          <h3 className="text-center text-[#434343] md:text-[40px] text-[20px] font-bold">
            Discover the world with us
          </h3>
        </div>

        <div className="flex justify-center items-center gap-2 p-4 md:h-[338px]">
          <div>
            <AiOutlineArrowLeft size={20} />
          </div>

          <div className="md:w-[90%] w-full overflow-scroll">
            <div className="flex md:gap-8 gap-4 md:min-w-[130%]">
              <div className="w-[268.5px] flex flex-col items-center justify-center gap-3">
                <div className="w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm">
                  <img
                    src="/images/restaurant.jpg"
                    className="w-full h-full rounded-md shadow-lg object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <h4 className="text-sm md:text-[18px]">Iceland</h4>
                <Link className="text-[#8A53FF] text-xs md:text-[16px]">
                  Discover
                </Link>
              </div>

              <div className="w-[268.5px] flex flex-col items-center justify-center gap-3">
                <div className="w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm">
                  <img
                    src="/images/restaurant2.jpg"
                    className="w-full h-full rounded-md shadow-lg object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <h4 className="text-sm md:text-[18px]">Iceland</h4>
                <Link className="text-[#8A53FF] text-xs md:text-[16px]">
                  Discover
                </Link>
              </div>
              <div className="w-[268.5px] flex flex-col items-center justify-center gap-3">
                <div className="w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm">
                  <img
                    src="/public/images/restaurant1.jpg"
                    className="w-full h-full rounded-md shadow-lg object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <h4 className="text-sm md:text-[18px]">Iceland</h4>
                <Link className="text-[#8A53FF] text-xs md:text-[16px]">
                  Discover
                </Link>
              </div>
              <div className="w-[268.5px] flex flex-col items-center justify-center gap-3">
                <div className="w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm">
                  <img
                    src="/images/restaurant2.jpg"
                    className="w-full h-full rounded-md shadow-lg object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <h4 className="text-sm md:text-[18px]">Iceland</h4>
                <Link className="text-[#8A53FF] text-xs md:text-[16px]">
                  Discover
                </Link>
              </div>
              <div className="w-[268.5px] flex flex-col items-center justify-center gap-3">
                <div className="w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm">
                  <img
                    src="/images/restaurant2.jpg"
                    className="w-full h-full rounded-md shadow-lg object-cover"
                    alt=""
                    srcset=""
                  />
                </div>
                <h4 className="text-sm md:text-[18px]">Iceland</h4>
                <Link className="text-[#8A53FF] text-xs md:text-[16px]">
                  Discover
                </Link>
              </div>
            </div>
          </div>

            <div className='md:w-[90%] w-full overflow-scroll'>
               <div className='flex md:gap-8 gap-4 md:min-w-[130%]'>
                  <div className='w-[268.5px] flex flex-col items-center justify-center gap-3'>
                     <div className='w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm'>
                        <img src="/images/restaurant.jpg" className='w-full h-full rounded-md shadow-lg object-cover' alt="" srcset="" />
                     </div>
                     <h4 className='text-sm md:text-[18px]'>Iceland</h4>
                     <Link className='text-[#8A53FF] text-xs md:text-[16px]'>Discover</Link>
                  </div>

                  <div className='w-[268.5px] flex flex-col items-center justify-center gap-3'>
                     <div className='w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm'>
                        <img src="/images/restaurant2.jpg" className='w-full h-full rounded-md shadow-lg object-cover' alt="" srcset="" />
                     </div>
                     <h4 className='text-sm md:text-[18px]'>Iceland</h4>
                     <Link className='text-[#8A53FF] text-xs md:text-[16px]'>Discover</Link>
                  </div>
                  <div className='w-[268.5px] flex flex-col items-center justify-center gap-3'>
                     <div className='w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm'>
                        <img src="/public/images/restaurant1.jpg" className='w-full h-full rounded-md shadow-lg object-cover' alt="" srcset="" />
                     </div>
                     <h4 className='text-sm md:text-[18px]'>Iceland</h4>
                     <Link className='text-[#8A53FF] text-xs md:text-[16px]'>Discover</Link>
                  </div>
                  <div className='w-[268.5px] flex flex-col items-center justify-center gap-3'>
                     <div className='w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm'>
                        <img src="/images/restaurant2.jpg" className='w-full h-full rounded-md shadow-lg object-cover' alt="" srcset="" />
                     </div>
                     <h4 className='text-sm md:text-[18px]'>Iceland</h4>
                     <Link className='text-[#8A53FF] text-xs md:text-[16px]'>Discover</Link>
                  </div>
                  <div className='w-[268.5px] flex flex-col items-center justify-center gap-3'>
                     <div className='w-full md:h-[317.05px] h-[100px] bg-gray-300 md:rounded-md rounded-sm'>
                        <img src="/images/restaurant2.jpg" className='w-full h-full rounded-md shadow-lg object-cover' alt="" srcset="" />
                     </div>
                     <h4 className='text-sm md:text-[18px]'>Iceland</h4>
                     <Link className='text-[#8A53FF] text-xs md:text-[16px]'>Discover</Link>
                  </div>
               </div>
            </div>

          <div>
            <AiOutlineArrowRight size={20} />
          </div>
        </div>
      </div>

      <div className="h-[493px] flex flex-col md:p-24 p-6 gap-4">
        <div className="flex justify-center items-center">
          <h3 className="text-center text-[#434343] md:text-[40px] text-[20px] font-bold">
            Find the best places to eat in...
          </h3>
        </div>

        <div className="flex flex-col md:flex-row md:px-24 md:pt-24 pb-4 gap-2 items-center">
          <div className="bg-[#F5F5F5] md:w-[50%] w-full rounded-md">
            <div className="h-[358px] bg-red-700 rounded-t-md shadow-lg">
              <img
                src="/images/restaurant.jpg"
                className="w-full h-full rounded-t-md shadow-lg"
                alt=""
                srcset=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-[24px]">London for Kids</h3>
              <p className="text-sm font-normal text-[#576074]">
                Marvel on the beauty of the iconic Matterhorn. Find the best
                places to stay that has the best views of this peak...Read Now.
              </p>
            </div>
          </div>

          <div className="md:w-[503px] w-full flex flex-col md:p-4 gap-4">
            <div className="md:h-[180px] flex gap-4 p-4 bg-[#F9F9F9]">
              <div className="w-[500px] rounded-sm bg-blue-900">
                <img
                  src="/images/restaurant.jpg"
                  className="w-full h-full rounded-md shadow-lg object-cover"
                  alt=""
                  srcset=""
                />
              </div>
              <div>
                <h3 className="text-[20px]">London for Kids</h3>
                <p className="text-xs md:text-sm font-normal text-[#576074] md:leading-[30px]">
                  The amazing Tuscany is home to famous Renaissance art and
                  architecture and a vast scenic landscape. Read Now.
                </p>
              </div>
            </div>

            <div className="md:h-[180px] flex gap-4 p-4 bg-[#F9F9F9]">
              <div className="w-[500px] rounded-sm bg-blue-900">
                <img
                  src="/images/restaurant.jpg"
                  className="w-full h-full rounded-md shadow-lg object-cover"
                  alt=""
                  srcset=""
                />
              </div>
              <div>
                <h3 className="text-[20px]">London for Kids</h3>
                <p className="text-xs md:text-sm font-normal text-[#576074] md:leading-[30px]">
                  The amazing Tuscany is home to famous Renaissance art and
                  architecture and a vast scenic landscape. Read Now.
                </p>
              </div>
            </div>

            <div className="md:h-[180px]  flex gap-4 p-4 bg-[#F9F9F9]">
              <div className="w-[500px] rounded-sm bg-blue-900">
                <img
                  src="/images/restaurant.jpg"
                  className="w-full h-full rounded-md shadow-lg object-cover"
                  alt=""
                  srcset=""
                />
              </div>
              <div>
                <h3 className="text-[20px]">London for Kids</h3>
                <p className="text-xs md:text-sm font-normal text-[#576074] md:leading-[30px]">
                  The amazing Tuscany is home to famous Renaissance art and
                  architecture and a vast scenic landscape. Read Now.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 pb-6">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <RxCaretRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Blog;

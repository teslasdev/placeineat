import { AiOutlineRight } from "react-icons/ai";
import Logo from "../../assets/logoplacetoeat.png";
import cam from "../../assets/cam.jpg";
import BlogCol from "../../components/blogCol";
import data from "../../utils/data.json";
import { Link } from "react-router-dom";
const CityPage = () => {
  return (
    <div className="bg-white">
      <div className="p-6 w-[200px] md:w-[300px]">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className=" p-16 pt-6 pb-0 palm:p-6 mobile:p-2">
        <div className="relative ">
          <div className="flex justify-end">
            <div className="bg-[#E2EDF2] w-[90%] h-[520px] tablet:h-[500px] palm:hidden"></div>
          </div>
          <div className="w-[650px] mb:w-[500px] ms:w-[400px] absolute top-[0px] palm:bg-[#E2EDF2] palm:relative palm:w-full palm:h-[100%] palm:p-5 ">
            <div className="mb:text-[40px] ms:text-[30px] text-[70px] font-medium text-right leading-[70px] ms:leading-[40px] palm:text-center palm:text-[23px] palm:font-bold mobile:text-[20px]">
              Top 8 Restaurants in London
            </div>
            <div className="text-[16px] mt-2 mobile:text-[13px] ">
              London is a multi-cultural city packed full of different types of
              cuisines. From much-loved neighborhood faves to hot new openings,
              we’ve scoured the streets to help you find some of the best
              restaurants, whether your visiting for the first time or simply
              looking for a new Place to Eat. <br />
              <br /> Whichever you pick, they’re guaranteed to give you London
              vibes as well as a fantastic meal. Try bombastic Indian dishes to
              modern kitchens testing the boundaries of sustainability here in
              one of the world’s culinary capitals.
            </div>
            <div className=" relative w-[180px] mt-[15px]">
              <button className="border rounded-full border-black w-[180px] text-[16px] font-medium h-[35px]">
                <Link to="/article" className="w-full">READ MORE</Link>
              </button>
              <div className="bg-black text-white w-[35px] h-[35px] flex justify-center items-center text-[20px] rounded-full absolute top-0 right-[-10px]">
                <AiOutlineRight />
              </div>
            </div>
          </div>
          <div className=" absolute top-[-5px] right-[10%] z-50 ">
            <img
              src={cam}
              alt=""
              className="h-[450px] tablet:w-[200px] tablet:h-[350px] palm:hidden"
            />
          </div>
          <div className="absolute top-[110px] right-[5%]">
            <img
              src="https://w0.peakpx.com/wallpaper/487/1010/HD-wallpaper-sunset-nature-ocean-sea-sky-sun.jpg"
              alt=""
              className="h-[400px] w-[300px] tablet:w-[200px] tablet:h-[300px] palm:hidden"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
        {data.map((card) => (
          <BlogCol content={card} />
        ))}
      </div>
    </div>
  );
};

export default CityPage;

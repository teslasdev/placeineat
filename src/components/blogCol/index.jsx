import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const BlogCol = ({ content }) => {
  const navigate = useNavigate();

  function gotoBlogPage() {
    navigate("/article");
  }
  return (
    <div className="border-2 m-10 w-[500px] rounded shadow-[0_3px_10px_0px_rgba(0,0,0,0.2)]  mb:w-[430px] ms:w-[350px] tablet:w-[300px] palm:w-[80%] mobile:w-[90%]">
      <img
        src={content.imageURL}
        alt=""
        className="rounded w-full rounded-b-none h-[400px] mb:h-[350px] tablet:h-[300px] palm:h-[330px] mobile:h-[250px]"
      />
      <div className="p-6">
        <div className="text-[20px] font-medium mb-[10px] tablet:text-[18px] palm:text-[22px] mobile:text-[14px]">
          {content.title}
        </div>
        <div className="text-[15px] palm:text-[18px] mobile:text-[13px]">
          {content.body}dip iscingelit. In sed et donec purus viverra. Sit justo
          velit, eu sed
        </div>
      </div>
      <div
        className=" relative w-[180px] mt-[5px] mb-[10px] mx-[auto]"
        onClick={gotoBlogPage}
      >
        <button className="border rounded-full border-black w-[180px] text-[16px] font-medium h-[35px]">
          READ MORE
        </button>
        <div className="bg-black text-white w-[35px] h-[35px] flex justify-center items-center text-[20px] rounded-full absolute top-0 right-[-10px]">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default BlogCol;

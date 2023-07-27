import { useState } from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(null);
  function gotoResponsePage() {
    setLoading(<FallingLines
      color="#ffffff"
      width="50"
      visible={true}
      ariaLabel='falling-lines-loading'
    />)
    setCheck(0)
    if(search === '') {
      setLoading(null)
    }
    if (search === "") {
      setLoading(null);
      return;
    }
    axios.post("https://placeineat.onrender.com/", {
        prompt: search,
      })
      .then(function (response) {
        setLoading(null);
        localStorage.setItem("placestoeat", response.data.bot.trim());
        navigate("/response");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [checked,setCheck] = useState(0)
  return (
    <div className="home-body-container">
      <div className="overlay">
        <Navbar className={"blog-btn"} logo={"logo"} />
        <div className="home-content">
          <div className="headline-text">Discover New Places To Eat</div>
          <div className="headline-text2">AI-Powered Restaurant Finder</div>
          <div>
            <div className="search-container">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Where to?"
              />
              <button className="let-eat" onClick={gotoResponsePage}>
                {isLoading || "Let`s Eat"}
              </button>
            </div>
          </div>
          <div className="filter-main">
            <div className="filter-box shadow-lg" onClick={() => setCheck(1)}>
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A] cursor-pointer" style={{background : checked === 1 ? "#22449A" : 'white' }} />
              <div className="food-pref">Preferences</div>
            </div>
            <div className="filter-box shadow-lg" onClick={() => setCheck(2)}>
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A] cursor-pointer" style={{background : checked === 2 ? "#22449A" : 'white' }}/>
              <div className="food-pref">Cuisines</div>
            </div>
          </div>
          <div className="filter-main mb-0 md:mb-5">
            <div className="flex shadow-lg bg-[#D9D9D9] md:w-[15%] w-[40%] rounded-[10px] overflow-scroll h-[200px] p-3 flex-col" style={{visibility : checked === 1 ? "" : 'hidden'}}>
              <div className="text-xs text-[#284C63] font-bold text-start">General</div>
              <div className="flex items-center gap-4 h-10">
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Vegetarian</div>
              </div>
              <div className="flex items-center gap-4 h-10">
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Vegan</div>
              </div>

              <div className="flex items-center gap-4 h-10">
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Halal</div>
              </div>


              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Kosher</div>
              </div>
            </div>
            <div className="flex shadow-lg bg-[#D9D9D9] md:w-[15%] w-[40%] rounded-[10px] overflow-scroll h-[200px] p-3 flex-col" style={{visibility : checked === 2 ? "" : 'hidden'}}>
              <div className="text-xs text-[#284C63] font-bold text-start">General</div>
              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Local</div>
              </div>
              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Italian</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Chinese</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Mexican</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Japanese</div>
              </div>


              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Indian</div>
              </div>


              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Thai</div>
              </div>


              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Mediterranean</div>
              </div>


              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Middle Eastern</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">American</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Korean</div>
              </div>


              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Vietnamese</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Spanish</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">Turkish</div>
              </div>

              <div className="flex items-center gap-4 h-10">
                <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A]" />
                <div className="food-pref">French</div>
              </div>

            </div>
          </div>
        </div>
        <div
          style={{
            height: "10%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "30px",
          }}
        >
          <div className="recent">Recent Searches</div>
          <div className="location-list">
            <marquee behavior="scroll" direction="left">
              NYC, Tokyo, Medellin, Paris, London, Los Angeles, London, Lisbon,
              Seville, Krakow
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home

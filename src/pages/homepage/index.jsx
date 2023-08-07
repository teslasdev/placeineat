import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import ResponsePage from "../responsepage";


const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isLoadings, setLoading] = useState(null);
  const [preference , setPreference] = useState([])
  const [cruisine , setCuisine] = useState([])
  const [promptPreference, setPromptPreference] = useState([])
  const [promptCuisine, setPromptCuisine] = useState([])
  const [systemPrompt,setSystemPrompt] = useState("")
  const [responseData , setResponseData] = useState(true)
  const [data , setData] = useState()
  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_BACKEND_URL+"preference/0").then((res) => {
      setPreference(res.data.data)
   })
  }, [])

  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_BACKEND_URL+"prompt/1").then((res) => {
      setSystemPrompt(res.data.data.prompt)
    })
 },[])

  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_BACKEND_URL+"preference/1").then((res) => {
      setCuisine(res.data.data)
   })
  }, [])

  const handlePreference = (value) => {
    if(!promptPreference.includes(value)) {
      setPromptPreference(prev => [...prev , value ])
    } else {
      setPromptPreference(promptPreference.filter(item => item !== value))
    }
  }
  const handleCuisine = (value) => {
    if(!promptCuisine.includes(value)) {
      setPromptCuisine(prev => [...prev , value ])
    } else {
      setPromptCuisine(promptCuisine.filter(item => item !== value))
    }
    console.log(promptCuisine)
  }
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
    if(promptPreference == [] || promptCuisine == []) {
      setPromptPreference([
        'anywhere'
      ])

      setPromptCuisine([
        'anywhere'
      ])
    }
    const data = {
      system : systemPrompt,
      prompt : search,
      preference : promptPreference,
      cuisine : promptCuisine
    }
      axios.post(import.meta.env.VITE_APP_BACKEND_URL, data)
      .then(function (response) {
        setLoading(null);
        setResponseData(false)
        setData(response.data.result.attributes)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [checked,setCheck] = useState(0)
  return (
    <div className="relative home-body-container">
      {responseData && responseData ?
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
                {isLoadings || "Let`s Eat"}
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
            <div className="flex shadow-lg bg-[#D9D9D9] w-[40%] md:w-[15%] rounded-[10px] overflow-scroll h-[200px] p-3 flex-col" style={{ visibility : checked == 1 ? '' : 'hidden' }}>
              <div className="text-xs text-[#284C63] font-bold text-start">General</div>
                {preference && preference.map((item , index) => {
                  return (
                    <div className="flex items-center gap-4 h-10" key={index} >
                      <div className={`w-[17px] h-[17px] border border-solid rounded-sm flex  border-[#22449A] ${promptPreference.includes(item.name) && 'bg-[#22449A]'} `} onClick={() => handlePreference(item.name)} />
                      <div className="food-pref">{item.name}</div>
                    </div>
                  )
                })} 
            </div>
            <div className="flex shadow-lg bg-[#D9D9D9] w-[40%] md:w-[15%] rounded-[10px] overflow-scroll h-[200px] p-3 flex-col" style={{ visibility : checked == 2 ? '' : 'hidden' }}>
              <div className="text-xs text-[#284C63] font-bold text-start">General</div>
                {cruisine && cruisine.map((item , index) => {
                  return (
                    <div className="flex items-center gap-4 h-10" key={index} >
                       <div className={`w-[17px] h-[17px] border border-solid rounded-sm flex  border-[#22449A] ${promptCuisine.includes(item.name) ? 'bg-[#22449A]' : 'bg-white' } `} onClick={() => handleCuisine(item.name)} />
                      <div className="food-pref">{item.name}</div>
                    </div>
                  )
                })} 
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
      :
      <ResponsePage input={search} preference={promptPreference}  cuisine={promptCuisine} data={data} />
      }
    </div>
  );
};

export default Home

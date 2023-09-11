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
  const [resData , setData] = useState([])
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

  useEffect(() => {
    console.log(resData)
  })
async function gotoResponsePage() {
    setLoading(<FallingLines
      color="#ffffff"
      width="50"
      visible={true}
      ariaLabel='falling-lines-loading'
    />)
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
      
    const response = await fetch(import.meta.env.VITE_APP_BACKEND_URL, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok || !response.body) {
    throw response.statusText;
  }
  console.log(response)
  // Here we start prepping for the streaming response
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const loopRunner = true;

  while (loopRunner) {
    // Here we start reading the stream, until its done.
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    const decodedChunk = decoder.decode(value, { stream: true });
    setResponseData(false)
    setData(prev => [...prev , JSON.parse(decodedChunk.replaceAll('*' , '')) ]); // update state with new chunk
    
  }
  }
  const [checked,setCheck] = useState(false)
  const [checked1,setCheck1] = useState(false)
  return (
    <div className="relative home-body-container">
      {responseData && responseData ?
      <div className="overlay">
        <Navbar className={"blog-btn"} logo={"logo"} />
        <div className="home-content">
          <div className="headline-text">Discover New Places To Eat</div>
          <div className="headline-text2">AI-Powered Restaurant Finder</div>
          <div className="sm:w-[50%] w-[90%] flex  items-center flex-col">
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

          <div className="dropdown flex justify-center sm:w-[530px] w-[100%] gap-3 m-3">
            <div className="filter-box shadow-lg" onClick={() => setCheck(!checked)}>
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A] cursor-pointer" style={{background : checked ? "#22449A" : 'white' }} />
              <div className="food-pref cursor-pointer">Preferences</div>
            </div>
            <div className="filter-box shadow-lg" onClick={() => setCheck1(!checked1)}>
              <div className="w-[17px] h-[17px] border border-solid rounded-sm flex bg-white border-[#22449A] cursor-pointer" style={{background : checked1 ? "#22449A" : 'white' }}/>
              <div className="food-pref cursor-default">Cuisines</div>
            </div>
          </div>
          <div className="filter-main justify-between relative md:w-[45%]  w-full  z-50 mb-0 md:mb-5">
            <div className="flex shadow-lg bg-[#D9D9D9] w-[50%] sm:w-[33%] rounded-[10px] overflow-scroll h-[200px] p-3 flex-col" style={{ visibility : checked ? '' : 'hidden' }}>
              <div className="text-xs text-[#284C63] font-bold text-start">General</div>
                {preference && preference.map((item , index) => {
                  return (
                    <div className="flex items-center gap-4 h-10 cursor-pointer" key={index} onClick={() => handlePreference(item.name)}>
                      <div className={`w-[17px] h-[17px] border border-solid rounded-sm flex  border-[#22449A] ${promptPreference.includes(item.name) && 'bg-[#22449A]'} `} onClick={() => handlePreference(item.name)} />
                      <div className="food-pref cursor-pointer">{item.name}</div>
                    </div>
                  )
                })} 
            </div>
            <div className="flex flex-col shadow-lg bg-[#D9D9D9] w-[50%] sm:w-[444px] rounded-[10px] overflow-scroll h-[200px] p-3" style={{ visibility : checked1 ? '' : 'hidden' }}>
                <div className="text-xs text-[#284C63]  font-bold text-start">General</div>
                  <div className="flex flex-wrap md:w-[90%] w-[200px]">
                    {cruisine && cruisine.map((item , index) => {
                      return (
                        <div className="flex z-10 items-center w-[50%] gap-4 h-10 cursor-pointer" key={index} onClick={() => handleCuisine(item.name)}>
                           <div className={`w-[17px] h-[17px] border border-solid rounded-sm flex  border-[#22449A] ${promptCuisine.includes(item.name) ? 'bg-[#22449A]' : 'bg-white' } `} />
                          <div className="food-pref">{item.name}</div>
                        </div>
                      )
                    })} 
                  </div>
                </div>
            </div>
          </div>
          
           <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "10px",
            bottom : "0",
          }}

          className="pb-10"
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
      :
      <ResponsePage input={search} preference={promptPreference}  cuisine={promptCuisine} data={resData} />
        // <p className="bg-white">{data}</p>
        // <>akaka</>
      }
    </div>
  );
};

export default Home

import { useState } from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import { useNavigate } from "react-router";
import axios from 'axios'
import { FallingLines } from "react-loader-spinner";
const Home = ({ input, onInputChange }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [isLoading , setLoading] = useState(null)
  function gotoResponsePage() {
    setLoading(<FallingLines
      color="#ffffff"
      width="50"
      visible={true}
      ariaLabel='falling-lines-loading'
    />)
    if(search === '') {
      setLoading(null)
      return;
    }
    axios.post('https://placeineat.onrender.com',{
      prompt: search,
    })
    .then(function (response) {
      setLoading(null)
      localStorage.setItem('placestoeat', response.data.bot.trim());
      navigate('/response')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
            <div className="filter-box">
              <input type="checkbox" className="checkbox" />
              <div className="food-pref">Food Preferences</div>
            </div>
            <div className="filter-box">
              <input type="checkbox" className="checkbox" />
              <div className="food-pref">Other Options</div>
            </div>
          </div>
        </div>
        <div style={{height:'10%' , display:"flex" ,justifyContent :"center" , flexDirection : 'column',alignItems: 'center', paddingBottom:"30px"}}>
          <div className="recent">Recent Searches</div>
            <div className="location-list">
              <marquee behavior="scroll" direction="left">
                NYC, Tokyo, Medellin, Paris, London, Los Angeles, London, Lisbon, Seville, Krakow
              </marquee>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;

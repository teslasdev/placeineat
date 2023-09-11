import "./style.css";
import Navbar from "../../components/navbar";
import ResponseCol from "../../components/resCol";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { useEffect , useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import  Typewriter from "typewriter-effect";
const ResponsePage = ({ input, preference , cuisine , data }) => {
  const text = `Top Restaurants in ${input || "[City]"}`;
  return (
    <div className="response-container">
      <Navbar className={"res-btn"} logo={"res-logo"} />
      <div className="head-con">
        <div className="response-headline">{text}</div>
        <span className="based">Based on your preferences:</span>
        <div className="box-bbt">
          <div className="three-btnd">
            {preference.map((item, index) => {
              return <div className="each-btn" key={index}>{item}</div>
            })}

            {cuisine.map((item, index) => {
              return <div className="each-btn green-btn" key={index}>{item}</div>
            })}
          </div>
        </div>
      </div>
      <div className="respond-content">
      {data && data.map((item, index) => {
          return (
            <div className="res-col-container">
              <div className="res-title">
                <div className="bg-[#284c63] h-full flex pl-5 p-2 items-center rounded-r-full min-w-[50%]">
                  <a href={item.website}>{index + 1}. {item.name}</a>
                </div>
              </div>
              <div className="res-container-body">
                <div className="res-address">
                  <div>
                    <h3 className="italic md:text-3xl text-sm mr-5 font-bold">{item.region}</h3>
                  </div>
                  <div className="mid-dolls">
                    <div className="res-dollars flex items-center">
                      
                      <div className="dolls">$${item.price_in_dollar}</div>
                    </div>
                  </div>
                  <div className="add-right">
                    <MdLocationOn className="loc-icon" />
                    <span className="address-text">
                      {item.address}
                    </span>
                    <MdLocationOn className="loc-icon" />
                    <span className="address-text">
                    {item.region}
                    </span>
                  </div>
                </div>
                <div className="dollar-phone-vegeterian">
                  <div className="phone-web">
                    <div className="phone-no">
                      <FaPhoneAlt className="pho-icon" />
                      <div className="phone-text">
                      {item.hotline}
                      </div>
                    </div>
                    <div className="phone-no">
                      <SiWebpack className="pho-icon" />
                      <a href={item.website} className="phone-text">
                     
                        {item.website}
                       
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                  <div className="three-text">{item.region},</div>
                    <div className="three-text">{item.preferences[0]},</div>
                    <div className="three-text">{cuisine[0]}</div>
                  </div>
                  
                </div>
                <div className="res-body-content">
                  <div className="res-body-text sm:text-[18px] text-[14px]">
                   
                    {item.description}
                    {/* <b> ({item.Description.split(' ').length} words)</b> */}
                    {/* <a href="www.none.com">Read more.</a> */}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
      </div>
      <div className="share-list">
        <div className="share-text">Share your list</div>
        <div className="share-icons-container">
          <FaFacebookSquare className="socio-icon" />
          <FaInstagramSquare className="socio-icon" />
          <AiFillTwitterSquare className="socio-icon" />
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;

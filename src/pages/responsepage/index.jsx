import "./style.css";
import Navbar from "../../components/navbar";
import ResponseCol from "../../components/resCol";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { useEffect , useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
const ResponsePage = ({ input }) => {
  const text = `Top Restaurants in ${input || "[City]"}`;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('placestoeat'));
    if (items) {
      setItems(items);
      console.log(items)
    }
  }, [setItems]);
  
  return (
    <div className="response-container">
      <Navbar className={"res-btn"} logo={"res-logo"} />
      <div className="head-con">
        <div className="response-headline">{text}</div>
        <span className="based">Based on your preferences:</span>
        <div className="box-bbt">
          <div className="three-btnd">
            <div className="each-btn">Middle Eastern</div>
            <div className="each-btn">Vegetarian</div>
            <div className="each-btn">Kosher</div>
            <div className="each-btn">Sushi</div>
            <div className="each-btn">Pizza</div>
            <div className="each-btn">Pasta</div>
            <div className="each-btn green-btn">Middle Eastern</div>
            <div className="each-btn green-btn">Vegetarian</div>
          </div>
        </div>
      </div>
      <div className="respond-content">
      {items.map((item, index) => {
  return (
    <div className="res-col-container">
      <div className="res-title">
        <a href={item.Website}>{index + 1}. {item.Name}</a>
      </div>
      <div className="res-container-body">
        <div className="res-address">
          <div className="mid-dolls">
            <div className="add-left">Middle Eastern</div>
            <div className="res-dollars">
              <div className="dolls">${item.Price}</div>
            </div>
          </div>
          <div className="add-right">
            <MdLocationOn className="loc-icon" />
            <span className="address-text">
              {item.Location}
            </span>
          </div>
        </div>
        <div className="dollar-phone-vegeterian">
          <div className="phone-web">
            <div className="phone-no">
              <FaPhoneAlt className="pho-icon" />
              <div className="phone-text">{item.Hotline}</div>
            </div>
            <div className="phone-no">
              <SiWebpack className="pho-icon" />
              <div className="phone-text">{item.Website}</div>
            </div>
          </div>
          <div className="three-text">Middle Eastern, Vegetarian, Kosher</div>
        </div>
        <div className="res-body-content">
          <div className="res-body-text">
            {item.Description}
            <b> ({item.Description.split(' ').length} words)</b>
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

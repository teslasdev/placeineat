import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
MdLocationOn;
const ResponseCol = ({data}) => {
  return (
  <>
  {data.map((item, index) => {
  return (
    <div className="res-col-container">
      <div className="res-title">
        <a href="www.none.com">{index + 1}. {item.name}</a>
      </div>
      <div className="res-container-body">
        <div className="res-address">
          <div className="mid-dolls">
            <div className="add-left">Middle Eastern</div>
            <div className="res-dollars">
              <div className="dolls">$</div>
              <div className="dolls">$</div>
              <div className="dolls">$</div>
              <div className="dolls diff">$</div>
            </div>
          </div>
          <div className="add-right">
            <MdLocationOn className="loc-icon" />
            <span className="address-text">
              237 St James Pl. Philadelphia, PA 19148
            </span>
          </div>
        </div>
        <div className="dollar-phone-vegeterian">
          <div className="phone-web">
            <div className="phone-no">
              <FaPhoneAlt className="pho-icon" />
              <div className="phone-text">1-714-463-0658</div>
            </div>
            <div className="phone-no">
              <SiWebpack className="pho-icon" />
              <div className="phone-text">Website</div>
            </div>
          </div>
          <div className="three-text">Middle Eastern, Vegetarian, Kosher</div>
        </div>
        <div className="res-body-content">
          <div className="res-body-text">
            Few things in life will train you for the rejection you’ll face when
            trying to reserve a table at Zahav. Only going to the DMV on a
            Saturday can really come close. But when you do get a chance to eat at
            this Old City Israeli icon, you’ll get to taste a fantastic rotation
            of small plates like fried carrots, fluffy laffa bread, and silky. Few
            things in life will train you for the rejection you’ll face when
            trying to reserve a table at Zahav. Only going to the DMV on a
            Saturday can really come close. But when you do get a chance to eat at
            this Old City Israeli icon, you’ll get to taste a fantastic rotation
            of small plates like fried carrots, fluffy laffa bread, and silky.
            <b> (130 words)</b>
            {/* <a href="www.none.com">Read more.</a> */}
          </div>
        </div>
      </div>
    </div>
  );
  })}
  
  </>
  )
};


export default ResponseCol;

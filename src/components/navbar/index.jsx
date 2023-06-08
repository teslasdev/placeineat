import { useNavigate } from "react-router";
const Navbar = ({ className, logo }) => {
  const navigate = useNavigate();
  function gotoResponsePage() {
    navigate("/response");
  }
  function gotoHome() {
    navigate("/");
  }
  return (
    <div className="navbar-container">
      <div className="header">
        <div className={logo} onClick={gotoHome}>
          PlacesTo<span className="eat-box">Eat</span>
        </div>
        <div className="nav">
          <button className={className} onClick={gotoResponsePage}>
            Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// "logo res-logo"

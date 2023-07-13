import { useNavigate } from "react-router";
const Navbar = ({ className, logo }) => {
  const navigate = useNavigate();
  function gotoResponsePage() {
    navigate("/blog");
  }

  function gotoResponseDash() {
    navigate("/dashboard");
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

          <button className={className} onClick={gotoResponseDash}>
            Dashbaord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// "logo res-logo"

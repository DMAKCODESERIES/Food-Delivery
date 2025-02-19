import { assets } from "../../assets/assets";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogIn, basketCount, setBasketCount }) => {
  const [isActive, setIsActive] = useState("Home");

  // Handle menu item click
  const handleMenuClick = (menu) => {
    setIsActive(menu);
  };

  // Handle basket click to reset the notification
  const handleBasketClick = () => {
    // Optionally, reset basketCount or perform any action when basket is clicked
    if (basketCount > 0) {
      setBasketCount(0); // Reset basket count (if needed)
    }
  };

  return (
    <div className="flex text-black font-bold p-4 w-full h-10 justify-between items-center">
      <a href="/" className="navbar__logo-link">
        <img src={assets.logo} alt="logo" className="navbar__logo" />
      </a>

      <nav className="flex space-x-6 p-4 text-black font-bold">
        <div>
          <a
            href="#Home"
            onClick={() => handleMenuClick("Home")}
            className={` ${isActive === "Home" ? "font-bold text-blue-500" : "hover:text-gray-400"}`}
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="#exploreMenu"
            onClick={() => handleMenuClick("about")}
            className={` ${isActive === "about" ? "font-bold text-blue-500" : "hover:text-gray-400"}`}
          >
            Menu
          </a>
        </div>
        <div>
          <a
            href="#appDownload"
            onClick={() => handleMenuClick("services")}
            className={` ${isActive === "services" ? "font-bold text-blue-500" : "hover:text-gray-400"}`}
          >
            Mobile App
          </a>
        </div>
        <div>
          <a
            href="#contact"
            onClick={() => handleMenuClick("contact")}
            className={` ${isActive === "contact" ? "font-bold text-blue-500" : "hover:text-gray-400"}`}
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="flex gap-5 justify-between items-center">
        <img src={assets.search_icon} alt="search_icon" className="w-6 h-6 object-contain" />
        <Link to="/Cart">
          <div className="relative" onClick={handleBasketClick}>
            <img src={assets.basket_icon} alt="basket_icon" className="w-6 h-6 object-contain" />
            {/* Notification dot appears only when basketCount > 0 */}
            {basketCount > 0 ? (
              <div
                className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
                title={`${basketCount} items in basket`}
              />
            ):<></>}
          </div>
        </Link>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowLogIn(true)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogIn: PropTypes.func.isRequired,
  basketCount: PropTypes.number.isRequired,
  setBasketCount: PropTypes.func.isRequired,
};

export default Navbar;

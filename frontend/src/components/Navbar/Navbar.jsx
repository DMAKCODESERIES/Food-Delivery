import "./Navbar.css";
import {assets} from "../../assets/assets";


const Navbar = () => {
  return (
    <div className="bg-blue-100 display flex  text-black font-bold p-4 w-full h-10 justify-between items-center ">
      <img src={assets.logo} alt="logo" className="navbar__logo" />
      <ul className="display flex justify-between  gap-5 ">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">menu</li>
        <li className="navbar__item">mobile-app</li>
        <li className="navbar__item">Contact</li>
        </ul>
        <div className="flex  gap-5 justify-between ">
            <img src={assets.search_icon} alt="search_icon" className="navbar__search" />
            <div>
                <img src={assets.basket_icon} alt="basket_icon" className="navbar__basket" />
                <div></div>
            </div>
            <button className="navbar__button">Sign In</button>
        </div>
      </div>
  )
}

export default Navbar

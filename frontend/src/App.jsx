import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "../Cart/Cart";
import PlaceOrder from "./pages/Place-orde/PlaceOrder";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LogInPopUp from "./components/loginPopUP/LogInPopUp";

const App = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [basketCount, setBasketCount] = useState(0);
  
  return (
    <>
      {showLogIn ? <LogInPopUp setShowLogIn={setShowLogIn} /> : <></>}
      <div>
        <Navbar setShowLogIn={setShowLogIn} basketCount={basketCount} setBasketCount={setBasketCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart setBasketCount={setBasketCount} />} />
          <Route path="/Place-Order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

import Navbar from "./components/Navbar/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home"
import Cart from "../Cart/Cart"
import PlaceOrder from "./pages/Place-orde/PlaceOrder"

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Cart" element={<Cart />} />
         <Route path="/Place-Order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App

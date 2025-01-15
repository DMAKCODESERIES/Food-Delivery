import { useState } from "react"
import AppDawnload from "../../components/appDawnload/AppDawnload"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDispaly from "../../components/foodDisplay/FoodDispaly"
import Header from "../../components/Header/Header"

const Home = () => {
  const [catagory, setCatagory] = useState('All')
  return (

    <div>
      <Header/>
      <ExploreMenu catagory={catagory} setCatagory={setCatagory}/>
      <FoodDispaly catagory={catagory}/>
      <AppDawnload/>
    </div>
   

  )
}

export default Home

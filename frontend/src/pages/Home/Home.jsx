import AppDawnload from "../../components/appDawnload/AppDawnload"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDispaly from "../../components/foodDisplay/FoodDispaly"
import Header from "../../components/Header/Header"

const Home = () => {
  return (

    <div>
      <Header/>
      <ExploreMenu/>
      <FoodDispaly/>
      <AppDawnload/>
    </div>
   

  )
}

export default Home

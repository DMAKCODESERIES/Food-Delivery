import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDispaly from "../../components/foodDisplay/FoodDispaly"
import Footer from "../../components/footer/Footer"
import Header from "../../components/Header/Header"

const Home = () => {
  return (
    <>
    <div>
      <Header/>
      <ExploreMenu/>
      <FoodDispaly/>
    </div>
    <Footer/>
    </>
  )
}

export default Home

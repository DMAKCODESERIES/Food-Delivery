import PropTypes from "prop-types";
import { menu_list } from "../../assets/assets";
import { useRef } from "react";

const ExploreMenu = ({catagory , setCatagory}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-8 "id="exploreMenu">
      <h1 className="text-3xl font-bold mb-4 text-center">Explore Our Menu</h1>
      <p className="text-gray-600 text-center mb-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, adipisci!
      </p>

      {/* Scrollable Menu Section */}
      <div className="relative">
        <button 
          onClick={() => scroll("left")} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        >
          &#8592;
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-6 scrollbar-hide p-4"
        >
          {menu_list.map((menu) => (
            <div key={menu.id} className="min-w-[200px] bg-white rounded-lg shadow-md p-4 cursor-pointer" onClick={()=>setCatagory(prev=>prev===menu.menu_name?"All":menu.menu_name)}>
              <img 
                src={menu.menu_image} 
                alt={menu.menu_name} 
                className="w-full h-36 object-cover rounded-lg"
              />
              <h2 className="mt-2 font-semibold text-lg text-gray-800">{menu.menu_name}</h2>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll("right")} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
        >
          &#8594;
        </button>

      </div>
      
    </div>
  );
};
ExploreMenu.propTypes = {
  catagory: PropTypes.func.isRequired,
  setCatagory: PropTypes.func.isRequired,
};

export default ExploreMenu;

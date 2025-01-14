import { useContext, useState } from "react";
import { StoreContext } from "../../../Context/StoreContext";
import { assets } from "../../assets/assets";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  const [itemCounts, setItemCounts] = useState({});

  const incrementItem = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decrementItem = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 0),
    }));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8" >
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
        Top Dishes Near You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {food_list.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{food.name}</h2>
              <p className="text-gray-600 my-3">{food.description}</p>
              
              {/* Increment/Decrement Section and Button Directly Below Description */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <img
                    src={assets.remove_icon_red}
                    alt="minus_icon"
                    className="w-7 h-7 cursor-pointer"
                    onClick={() => decrementItem(food._id)}
                  />
                  <span className="mx-3 text-xl">{itemCounts[food._id] || 0}</span>
                  <img
                    src={assets.add_icon_green}
                    alt="add_icon"
                    className="w-7 h-7 cursor-pointer"
                    onClick={() => incrementItem(food._id)}
                  />
                </div>
                <p className="text-lg font-semibold text-green-600">${food.price}</p>
              </div>

              <button className="bg-green-500 text-white py-2 w-full rounded-lg font-medium hover:bg-green-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

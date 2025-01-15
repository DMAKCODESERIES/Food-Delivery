import { useContext } from "react";
import { StoreContext } from "../../../Context/StoreContext";
import { assets } from "../../assets/assets";

const FoodDisplay = () => {
  const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
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

              {!cartItems[food._id] ? (
                <img
                  onClick={() => addToCart(food._id)}
                  src={assets.add_icon_white}
                  alt="add_icon"
                  className="w-7 h-7 cursor-pointer"
                />
              ) : (
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <img
                      onClick={() => removeFromCart(food._id)}
                      src={assets.remove_icon_red}
                      alt="remove_icon"
                      className="w-7 h-7 cursor-pointer"
                    />
                    <span className="mx-3 text-xl">{cartItems[food._id]}</span>
                    <img
                      onClick={() => addToCart(food._id)}
                      src={assets.add_icon_green}
                      alt="add_icon"
                      className="w-7 h-7 cursor-pointer"
                    />
                  </div>
                  <p className="text-lg font-semibold text-green-600">
                    ${food.price}
                  </p>
                </div>
              )}

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

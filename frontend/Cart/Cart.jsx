import { useContext, useEffect } from "react";
import { StoreContext } from "../Context/StoreContext";
import PropTypes from "prop-types";

const Cart = ({ setBasketCount }) => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  useEffect(() => {
    // Calculate the basket count once when the component mounts or cartItems change
    const totalItems = food_list.reduce((total, item) => {
      if (cartItems[item._id]) {
        total += cartItems[item._id];
      }
      return total;
    }, 0);
    setBasketCount(totalItems);
  }, [cartItems, food_list, setBasketCount]); // Only rerun when cartItems or food_list change

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h1>

      {/* Cart Table */}
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700 font-semibold">
            <th className="p-4">Items</th>
            <th className="p-4">Title</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Total</th>
            <th className="p-4">Remove</th>
          </tr>
        </thead>

        <tbody>
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>

                  {/* Item Title */}
                  <td className="p-4 text-gray-800">{item.name}</td>

                  {/* Item Price */}
                  <td className="p-4 text-gray-600">${item.price.toFixed(2)}</td>

                  {/* Quantity */}
                  <td className="p-4 text-gray-600">{cartItems[item._id]}</td>

                  {/* Total Price */}
                  <td className="p-4 text-gray-800 font-medium">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </td>

                  {/* Remove Button */}
                  <td className="p-4">
                    <button
                      className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
                      title="Remove item"
                      onClick={() => removeFromCart(item._id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <div className="flex justify-between mt-6 space-x-8">
  {/* Left Section - Cart Total */}
  <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
    <div className="flex justify-between mt-6">
      <h3 className="font-medium">Subtotal</h3>
      <p className="text-gray-600">${0}</p>
    </div>
    <div className="flex justify-between mt-2">
      <h3 className="font-medium">Delivery Fee</h3>
      <p className="text-gray-600">${3}</p>
    </div>
    <div className="flex justify-between mt-2">
      <h2 className="font-semibold">Total</h2>
      <p className="font-bold">${0}</p>
    </div>

    <div className="mt-6 text-right">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Checkout
      </button>
    </div>
  </div>

  {/* Right Section - Promo Code */}
  <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
    <p className="font-medium mb-2">If you have a promo code, please enter it below:</p>
    <input
      type="text"
      placeholder="Enter promo code"
      className="border p-2 w-full mt-2 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-2 w-full">
      Apply
    </button>
  </div>
</div>

    </div>
  );
};

Cart.propTypes = {
  setBasketCount: PropTypes.func.isRequired,
  
};
export default Cart;

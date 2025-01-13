const Header = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-yellow-50 px-6 text-center space-y-4 rounded-lg mt-2">
      <h1 className="text-4xl font-bold">Place Your Order Here</h1>
      <p className="max-w-md text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, placeat.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Order Now
      </button>
    </div>
  );
}

export default Header;

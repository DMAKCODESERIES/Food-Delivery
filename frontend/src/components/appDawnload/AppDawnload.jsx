import { assets } from "../../assets/assets";

const AppDawnload = () => {
  return (
    <div className="bg-gray-100 py-10 px-5" id="appDawnload">
      <div className="app-dawnload text-center max-w-lg mx-auto">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Download the App for better experience <br /> Tomato App available on:
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <img src={assets.play_store} alt="play store" className="w-40" />
          <img src={assets.app_store} alt="app store" className="w-40" />
        </div>
      </div>
    </div>
  );
};

export default AppDawnload;

import { assets } from './../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5" id='contact'>
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Right Section */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <img src={assets.logo} alt="logo" className="w-24" />
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illo.
          </p>
          <div className="flex space-x-4 mt-2">
            <img src={assets.facebook_icon} alt="facebook" className="w-6 h-6" />
            <img src={assets.twitter_icon} alt="twitter" className="w-6 h-6" />
            <img src={assets.linkedin_icon} alt="instagram" className="w-6 h-6" />
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#exploreMenu" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/" className="text-gray-300 hover:text-white">Our Team</a></li>
            <li><a href="/" className="text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="/" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        <p>© 2020. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

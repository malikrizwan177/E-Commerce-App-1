import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img loading="lazy" src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            unde aspernatur fugit sint repellat excepturi quisquam a
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to={`/`}><li className="hover:text-gray-950 cursor-pointer">Home</li></NavLink>
            <NavLink to={`about`}><li className="hover:text-gray-950 cursor-pointer">About Us</li></NavLink>
            <NavLink to={`/orders`}><li className="hover:text-gray-950 cursor-pointer">Delivery</li></NavLink>
            <NavLink to={`/`}><li className="hover:text-gray-950 cursor-pointer">Privacy Policy</li></NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-789</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2024 @ Muhammad Rizwan Malik - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

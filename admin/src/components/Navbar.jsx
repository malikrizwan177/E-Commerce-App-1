import { assets } from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <nav className="flex items-center justify-between py-2 px-[4%]">
        <img src={assets.logo} alt="logo" className="w-[max(10%,80px)]"/>
        <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </nav>
  )
}

export default Navbar
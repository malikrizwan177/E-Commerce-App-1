import { useContext, useState } from "react"
import { assets } from "../assets/frontend_assets/assets"
import CartTotal from "../components/cartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

  const { navigate } = useContext(ShopContext)

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input type="text" name="f_name" id="f_name" placeholder="First name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
          <input type="text" name="l_name" id="l_name" placeholder="Last name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
        <input type="email" name="email" id="email" placeholder="Email Address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        <input type="text" name="address" id="address" placeholder="Street Address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        <div className="flex gap-3">
          <input type="text" name="city" id="city" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
          <input type="text" name="state" id="state" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
        <div className="flex gap-3">
          <input type="number" name="zip_code" id="zip_code" placeholder="Zip Code" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
          <input type="text" name="country" id="country" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
        </div>
        <input type="number" name="phone" id="phone" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full"/>
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : 'bg-white'}`}></p>
              <img src={assets.stripe_logo} alt="stripe_logo" className="h-5 mx-4"/>
            </div>
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : 'bg-white'}`}></p>
              <img src={assets.razorpay_logo} alt="razorpay_logo" className="h-5 mx-4"/>
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : 'bg-white'}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
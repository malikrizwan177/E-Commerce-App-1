import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"

const Verify = () => {

    const { navigate, token, setCartItem, backendURL } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backendURL + '/api/order/verifyStripe', {success, orderId}, {headers: {token}})
            if (response.data.success) {
                setCartItem({})
                toast.success("Payment success")
                navigate('/orders')
            } else {
                toast.error("Payment failed")
                navigate('/cart')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    
    useEffect(() => {
      verifyPayment()
    
      return () => {
        null
      }
    }, [token])
    

  return (
    <div>Verify</div>
  )
}

export default Verify
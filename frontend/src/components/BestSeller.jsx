import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"
import { assets } from "../assets/frontend_assets/assets"

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    const [bestSellerLoader, setBestSellerLoader] = useState(true)

    useEffect(() => {
      if (products.length > 0) {
        setBestSellerLoader(false)
      }
      const bestProduct = products.filter((item) => (item.bestSeller))
      setBestSeller(bestProduct.slice(0,5))
    
      return () => {
        null
      }
    }, [products])
    

  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatem aliquam consequuntur.</p>
        </div>
        {bestSellerLoader ? (
          <img src={assets.loading_gif} alt="loader" className="w-12 h-12 mx-auto"/>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {bestSeller.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))}
          </div>
        )}
    </div>
  )
}

export default BestSeller
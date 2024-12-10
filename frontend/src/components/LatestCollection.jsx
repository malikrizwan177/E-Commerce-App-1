import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import ProductItem from "./ProductItem"
import { assets } from "../assets/frontend_assets/assets"

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [latestProduct, setLatestProduct] = useState([])
    const [latestCollectionLoader, setLatestCollectionLoader] = useState(true)

    useEffect(() => {
      if (products.length > 0) {
        setLatestCollectionLoader(false)
      }
      setLatestProduct(products.slice(0,10))
    
      return () => {
        null
      }
    }, [products])
    

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptate harum corporis est ea et possimus consequuntur soluta</p>
        </div>
        {/* Rendering Products */}
        {latestCollectionLoader ? (
          <img src={assets.loading_gif} alt="loader" className="w-12 h-12 mx-auto"/>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {latestProduct.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))}
          </div>
        )}
    </div>
  )
}

export default LatestCollection
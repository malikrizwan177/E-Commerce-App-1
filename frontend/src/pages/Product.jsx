import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/frontend_assets/assets"
import RelatedProducts from "../components/RelatedProducts"

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState([])
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])      
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  
    return () => {
      undefined || null
    }
  }, [productId, products])
  

  return productData ?  (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div id="productimages" className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item,index) => (
              <img onClick={() => setImage(item)} src={item} alt="image" key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img loading="lazy" className="w-full h-auto" src={image} alt="image" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img loading="lazy" src={assets.star_icon} alt="" className="w-3 5" />
            <img loading="lazy" src={assets.star_icon} alt="" className="w-3 5" />
            <img loading="lazy" src={assets.star_icon} alt="" className="w-3 5" />
            <img loading="lazy" src={assets.star_icon} alt="" className="w-3 5" />
            <img loading="lazy" src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item,index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quo ea corrupti, iure ex ratione sapiente mollitia assumenda facilis. Aliquam ut, doloribus consequatur itaque aliquid impedit totam sunt voluptate qui?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis doloribus quod! Sequi, soluta ipsa? Quas consequuntur, neque laudantium, numquam sed aperiam et, aliquam magnam ea repudiandae officiis accusantium beatae.</p>
        </div>
      </div>
      {/* Display Latest Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className="opacity-0">

  </div>
}

export default Product
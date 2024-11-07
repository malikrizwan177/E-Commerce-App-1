import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = ( props ) => {
    
    const currency = '$'
    const delivery_fee = 10
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState([])

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size')
            return;
        }

        let cartData = structuredClone(cartItem)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)
    }

    const getCardCount = () => {
        let totalCount = 0
        for (const items in cartItem) {
            for (const item in cartItem[items])
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {
                    
                }
            }
            return totalCount
        }
    
    const value = {
        products , currency , delivery_fee, search, setSearch, showSearch, setShowSearch, cartItem, addToCart, getCardCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
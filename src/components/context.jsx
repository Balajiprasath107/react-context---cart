import { createContext, useState } from "react";
import products from './products.json'


export const CartContext = createContext(null);


function Cartstate({children}){
    const [cartCount,setCartCount] = useState(0)
    const [cartContains,setCartContains] = useState([])
    const [TotalCartPrice,setTotalCartPrice] = useState(0)
    function removeitem(item){
        let newbasket = cartContains.filter((content)=> content.id !== item.id)
        setCartContains([...newbasket])
        setCartCount(cartCount-item.quantity)
        let newtotal = Math.round((TotalCartPrice*100)-(item.price*100*item.quantity))/100
        setTotalCartPrice(newtotal)
        item.quantity = 1
    }
    function Additem(item){
        let newbasket = [...cartContains]
        newbasket.push(item)
        setCartContains([...newbasket])
        let newtotal = Math.round((TotalCartPrice*100)+((item.price*100)*item.quantity))/100
        setTotalCartPrice(newtotal)
        setCartCount(cartCount+1)
    }
    return(
        <CartContext.Provider value={{products,cartCount,setCartCount,removeitem,Additem,cartContains,setCartContains,TotalCartPrice,setTotalCartPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartstate
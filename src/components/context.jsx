import { createContext, useState } from "react";
import products from './products.json'


export const CartContext = createContext(null);


function Cartstate({children}){
    const [cartCount,setCartCount] = useState(0)
    const [cartContains,setCartContains] = useState([])
    function removeitem(item){
        let newbasket = cartContains.filter((content)=> content.id !== item.id)
        setCartContains([...newbasket])
        setCartCount(cartCount-1)
    }
    function Additem(item){
        let newbasket = [...cartContains]
        newbasket.push(item)
        setCartContains([...newbasket])
        setCartCount(cartCount+1)
    }
    return(
        <CartContext.Provider value={{products,cartCount,setCartCount,removeitem,Additem,cartContains,setCartContains}}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartstate
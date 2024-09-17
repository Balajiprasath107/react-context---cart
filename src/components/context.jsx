import { createContext, useState } from "react";
import products from './products.json'


export const CartContext = createContext(null);


function Cartstate({children}){
    const [cartCount,setCartCount] = useState(0)
    
    return(
        <CartContext.Provider value={{products,cartCount,setCartCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartstate
import { createContext } from "react";
import products from './products.json'


export const CartContext = createContext(null);


function Cartstate({children}){

    
    return(
        <CartContext.Provider value={{products}}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartstate
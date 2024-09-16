import { createContext } from "react";


export const CartContext = createContext(null);


function Cartstate({children}){

    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartstate
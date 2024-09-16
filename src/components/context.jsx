import { createContext } from "react";


export const cartContext = createContext(null);


function cartstate({children}){

    return(
        <cartContext.Provider value={{}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartstate
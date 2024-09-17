import React, { useContext } from 'react'
import { CartContext } from './context'
import Card from './card'
function Catalog() {
  const {products} = useContext(CartContext)
  
  return (
    <section className="py-2 position z-2 positon-absolute">
            <div className="container px-4 px-lg-5 mt-5 z-2 positon-absolute">
               <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    products.map((item)=>
                        <>
                        <Card key={item.id} item={item}/>
                        </>
                )}
                </div>
            </div>
    </section>
  )
}

export default Catalog
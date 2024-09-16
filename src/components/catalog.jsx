import React from 'react'
import products from './products.json'
function Catalog() {
  return (
    <section className="py-5 position z-2 positon-absolute">
            <div className="container px-4 px-lg-5 mt-5 z-2 positon-absolute">
               <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    products.map((item)=>{
                    })
                }
                </div>
            </div>
        </section>
  )
}

export default Catalog
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
                    products.map((item)=>{
                        return (
                            <div className="col mb-5 z-2 positon-absolute">
                                <div className="card h-100 z-2 positon-absolute">
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                    <img className="card-img-top object-fit-contain border rounded" style={{height:'250px'}} src={item.image} alt="..."></img>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">{item.title}</h5>
                                            {/* Product reviews*/}
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                {
                                                    [...Array(Math.ceil(item.rating.rate))].map((item, index) =>
                                                        <div className="bi-star-fill" key={index}></div>
                    
                                                    )
                    
                                                }
                                                {
                                                    [...Array(5 - Math.ceil(item.rating.rate))].map((item, index) =>
                                                        <div className="bi-star" key={index}></div>
                    
                                                    )
                                                }
                                                <div className="ms-2">{item.rating.count}</div>
                                            </div>
                                            {/* Product price*/}
                                            {
                                                <div>
                                                    ${item.price}.00
                                                </div>
                                            }
                    
                                        </div>
                                    </div>
                                    {/* Product actions*/}{
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto">Add to Cart</a>
                                            </div>
                                        </div>
                    
                                    }
                    
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
  )
}

export default Catalog
import React from 'react'

function Card({item}) {
    
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
                                [...Array(Math.ceil(item.rating.rate))].map((ele, index) =>
                                    <div className="bi-star-fill"></div>

                                )

                            }
                            {
                                [...Array(5 - Math.ceil(item.rating.rate))].map((ele, index) =>
                                    <div className="bi-star"></div>

                                )
                            }
                            <div className="ms-2" style={{fontWeight:"bold"}}>{item.rating.rate}</div>
                            <div className="ms-2" style={{color:"#007185", fontWeight:"bold"}}>{item.rating.count}</div>
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
}

export default Card
import React, { useContext, useState } from 'react'
import { CartContext } from './context'
import './style.css'
import CartCard from './cartCard'
import EmptyCart from './EmptyCart'
function Cart() {
    const { cartContains, TotalCartPrice, cartCount } = useContext(CartContext)
    return (

        <>
            {TotalCartPrice !== 0 ?
                <div>
                    <h2>Cart</h2>
                    <div className='cartWindow'>
                        <div className='cartCardWindow'>
                            {
                                cartContains.map((item) =>
                                    <CartCard key={item.id} item={item} />
                                )
                            }
                        </div>
                        <div className='checkout'>
                            <h5 className='fw-bolder '>SubTotal ({cartCount} {cartCount > 1 ? 'items' : 'item'})</h5>
                            <div className='ps-5 text-start'>
                                <p>Total Cost : ${TotalCartPrice}</p>
                                <p>GST : 18%</p>
                                <p>Shipping Charge : $50</p>
                                <p className='fw-bolder'>You Pay : ${Math.round((TotalCartPrice * 100 * 1.18) + (50 * 100)) / 100}</p>
                            </div>
                            <div> <button className='btn btn-warning'>Proceed to buy</button>
                            </div>
                        </div>
                    </div>
                </div> : <EmptyCart />
            }
        </>

    )
}

export default Cart
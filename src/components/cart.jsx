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
                            <h5>Subtotal ({cartCount} {cartCount > 1 ? 'items' : 'item'}) : ${TotalCartPrice} </h5>
                            <button className='btn btn-warning'>Proceed to buy</button>
                        </div>
                    </div>
                </div> : <EmptyCart />
            }
        </>

    )
}

export default Cart
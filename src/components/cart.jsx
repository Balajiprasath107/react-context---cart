import React, { useContext } from 'react'
import { CartContext } from './context'
import Card from './card'

function Cart() {
    const {cartContains,setCartContains} = useContext(CartContext)
    return (
        <>
        {
            cartContains.map((item)=>
                <Card key={item.id} item={item} status={true}/>
            )
        }
        
        </>
        // <div className='p-5 text-left'>
        //     <div className=" w-100" style={{border:"2px solid #000"}}>
        //         <div className="card-body p-3 d-flex">
        //             <img className="card-img-left d-inline p-2" style={{ height: "200px" }} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        //             <div className='d-inline p-3'>
        //                 <h5 className="text-left">Card title supporting text below as a natural lead-in to a</h5>
        //                 <p className="">With supporting text below as a natural lead-in to additional content.</p>
        //             </div>
        //             <div className='p-3'>
        //                 <div class="form-group d-flex">
        //                     <label for="exampleFormControlSelect1">dddd</label>
        //                     <select class="form-control" id="exampleFormControlSelect1">
        //                         <option>1</option>
        //                         <option>2</option>
        //                         <option>3</option>
        //                         <option>4</option>
        //                         <option>5</option>
        //                     </select>
        //                 </div>
        //                 <p>price</p>
        //                 <a className="btn btn-danger ">Remove</a>

        //             </div>
                    
        //         </div>
                
        //     </div>
            
        // </div>
    )
}

export default Cart
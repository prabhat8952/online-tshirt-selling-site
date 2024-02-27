import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart } from '../utils/cartslice';
// import store from '../utils/store'

const Cart = () => {
  const cartinfo=useSelector(store => store.cart.items);
  {console.log(cartinfo)}
  const dispatch=useDispatch();
  const handleclear=()=>{
    dispatch(clearcart());
  }
  return (
    <>
    <button className='clear-cart' onClick={()=>{handleclear()}}>Clear-cart</button>
    <div className='cart-container'>
      
      

        {cartinfo.map((it)=>{
          return(
          <div className='cart-card' key={it.id} >
            <img src={it.image} className='cart-img'/>
            <div className='cart-script'>
            <h1>{it.name}</h1>
            <h1 >Rs.{it.price}</h1>
            </div>
            </div>
          );
        })
      }

      

    </div>
    </>
  )
}

export default Cart
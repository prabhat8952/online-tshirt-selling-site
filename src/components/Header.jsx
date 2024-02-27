import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {productList} from "../config"
import { useDispatch, useSelector } from 'react-redux';
import {  setfilteredtext } from '../utils/productslice';
import { addItems } from '../utils/cartslice';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [searchtext,setsearchtext]=useState("");
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(setfilteredtext(searchtext));
  }, [searchtext,dispatch]);
  console.log(searchtext);
  const cartItem=useSelector(store=>store.cart.items);
  return (
    <>
    <div className='header-container'>
        
            <div className='left-container'>
                <div className='logo-btn'><Link to="./">Teeees</Link></div>
                
                    <div className='men'>Men</div>
                    <div className='women'>Women</div>
                
            </div>
            <div className='search-container'>
               <input type='text' value={searchtext} placeholder='Search any T-shirts' className='search-input'
                  onChange={(e)=>{
                    setsearchtext(e.target.value);
                  }}
                  ></input>
            </div>
            <div className='right-container'>
              <div className="profile"><Link to="./profile">Profile</Link></div>
              <div className='wishlist'><Link to="./wishlist">Wishlist</Link></div>
              <div className='cart'><Link to="./cart">Cart-{cartItem.length}</Link></div>
              {/* {console.log(cartItem)} */}
            
            </div>
        
    </div>
    
    </>
  )
}

export default Header;
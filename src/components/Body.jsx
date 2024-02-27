import React, { useState,useEffect } from 'react'
import { productList } from '../config'
import Card from './Card'
import { useSelector } from 'react-redux'
import {  selectFilteredtext } from '../utils/productslice'
import store from '../utils/store'
// import { Link } from 'react-router-dom'
const Body = () => {
  const [filteredproduct, setfilteredproduct] = useState(productList);
  const filteredtext = useSelector(selectFilteredtext);

  useEffect(() => {
    /* if (filteredtext !== undefined && filteredtext !== "") { */
      const filteredProducts = productList.filter((item) =>
        item.name.toLowerCase().includes(filteredtext.toLowerCase())
      );
      setfilteredproduct(filteredProducts);
    /* else {
      setfilteredproduct(productList);
    } */
  }, [filteredtext]);
  //  console.log(filteredtext);
  
  const [sizefilter,setsizefilter]=useState(productList);
 

   const handlebuttonresult=(size)=>{
       const ans= sizefilter.filter((item)=>item.sizes.includes(size));
       setsizefilter(ans)
   }


  return (
     <div className="main-body-container">
        <div className='left-body-container'>
          <div className='filter-description'>Filter based on the size</div>
          <div className='size-button-container'>
            <button onClick={()=>{handlebuttonresult("S")}}>S</button>
            <button onClick={()=>{handlebuttonresult("M")}}>M</button>
            <button onClick={()=>{handlebuttonresult("L")}}>L</button>
            <button  onClick={()=>{handlebuttonresult("XL")}}>XL</button>
            </div>
        </div>
        <div className='right-body-container'>
          {
            filteredproduct.map((item,index) => (
              <Card key={index} {...item} />
              
             
          ))
        }
        </div>
     </div> 
  )
}

export default Body
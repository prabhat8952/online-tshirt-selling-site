import { Link } from "react-router-dom";
import { productList } from "../config"
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartslice";
const Card=({name,image,sizes,price,gender})=>{
    const dispatch=useDispatch();
    const handleaddtocart=(item)=>{
        dispatch(addItems(item));
    }
    
    return(
        
        <div className="card-info">
            <div className="inner-card">
            {/* <a href="./"> */}
            <img src={image} alt={name} className="image-of-tees" />
            <div className="name-of-tees">{name}</div>
           {/*  <div className="gender-info">{gender}</div> */}
            <div className="sizes-of-tees">Size: {sizes.join(", ")}</div>
            <div className="prices-of-tees">Rs. {price}</div>
            <button className="add-to-cart" onClick={()=>{handleaddtocart({name,image,price})}}>Add</button>
            {/* </a> */}
            
            </div>
            
        </div>
    
    )
}
export default Card;
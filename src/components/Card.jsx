import { Link } from "react-router-dom"
import { productsquantity, shortentext } from "../helpes/helpe"
import { BiAlignRight, BiCartAlt } from "react-icons/bi"

import styles from "./card.module.css"
import { useCart } from "../context/Cartcontext"
import { RiDeleteBin5Line } from "react-icons/ri"


function Card({data}) {
const {image, id, title,price }=data


const [state , dispatch]= useCart();
console.log(state)
const clickhandler =(type) => {
  dispatch({ type , payload:data})
}
const quantity =productsquantity(state,id)


 
  return (


<div className={styles.card}>
    <img src={image} alt={title} />
    <h3>{shortentext(title)}</h3>
    <p>{price} $</p>
  <div className={styles.action}>
    <Link to={`/products/${id}`}><BiAlignRight/></Link>
    <div>
    {quantity>1 &&<button onClick={()=>clickhandler("DECREASE")}> - </button>}
    {quantity===1 &&  <button onClick={()=>clickhandler("REMOVE_ITEM")}><RiDeleteBin5Line/></button> }
    {!!quantity &&<span>{quantity}</span>}
    {quantity===0 ? <button onClick={()=>clickhandler("ADD_ITEM")}><BiCartAlt/></button>
    : 
    <button onClick={()=>clickhandler("INCREASE")}> + </button>}
    </div>
   
  
    
   
   
    
    


  </div>

</div>
    
  )
}

export default Card
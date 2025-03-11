import { Link } from "react-router-dom"
import { shortentext } from "../helpes/helpe"
import { BiAlignRight, BiCartAlt } from "react-icons/bi"

import styles from "./card.module.css"

function Card({data}) {

const {image, id, title,price }=data
  return (

<div className={styles.card}>
    <img src={image} alt={title} />
    <h3>{shortentext(title)}</h3>
    <p>{price} $</p>
  <div className={styles.action}>
    <Link to={`/products/${id}`}><BiAlignRight/></Link>
    <button><BiCartAlt/></button>


  </div>

</div>
    
  )
}

export default Card
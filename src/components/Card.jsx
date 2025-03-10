import { Link } from "react-router-dom"
import { shortentext } from "../helpes/helpe"
import { BiAlignRight, BiCartAlt } from "react-icons/bi"


function Card({data}) {

const {image, id, title,price }=data
  return (

<div>
    <img src={image} alt={title} width="150px" />
    <h3>{shortentext(title)}</h3>
    <p>{price} $</p>
  <div>
    <Link to={`/products/${id}`}><BiAlignRight/></Link>
    <button><BiCartAlt/></button>


  </div>

</div>
    
  )
}

export default Card
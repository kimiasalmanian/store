import React from 'react'
import { shortentext } from '../helpes/helpe'
import { RiDeleteBin5Line } from "react-icons/ri"

import styles from "./Basketcart.module.css"

function Basketcart({data , clickhandler}) {
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title}/>
        <h4>{data.price}$</h4>
        <h4>{shortentext(data.title)}</h4>
        <div  className={styles.action}>
            {data.quantity ===1 && <button onClick={() => clickhandler("REMOVE_ITEM" , data)}><RiDeleteBin5Line/></button>}
            {data.quantity >1 && <button onClick={() => clickhandler("DECREASE" ,data)}> -</button>}
            <span>{data.quantity}</span>
            <button onClick={() => clickhandler("INCREASE" ,data)}> +</button>
        </div>
    </div>
  )
}

export default Basketcart
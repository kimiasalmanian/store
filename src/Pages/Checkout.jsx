import React from 'react'
import { useCart } from '../context/Cartcontext'
import Basketcart from '../components/basketcart'
import Basketsidebar from '../components/Basketsidebar'

import styles from "./Checkout.module.css"



function Checkout() {
const [state,dispatch] = useCart()

const clickhandler=(type , payload) => dispatch({type,payload})

if(!state.itemcounter) {return(
  <p>Empty</p>
)}

  return (
    <div className={styles.container}>
      <Basketsidebar state={state} clickhandler={clickhandler}/>
      <div className={styles.products}>
        {state.selecteditem.map((products) =>(<Basketcart key={products.id} data={products} clickhandler={clickhandler}/>) )}
      </div>
    </div>
  )
}

export default Checkout
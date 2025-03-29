import React from 'react'
import { useCart } from '../context/Cartcontext'
import Basketcart from '../components/basketcart'



function Checkout() {
const [state,dispatch] = useCart()

const clickhandler=(type , payload) => dispatch({type,payload})



  return (
    <div>
      <div>
        {state.selecteditem.map((products) =>(<Basketcart key={products.id} data={products} clickhandler={clickhandler}/>) )}
      </div>
    </div>
  )
}

export default Checkout
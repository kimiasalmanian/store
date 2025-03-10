import { useproducts } from "../context/ProductsContext"


function Productspage() {

    const products=useproducts()
    console.table(products)

  return (
    <div>Productspage</div>
  )
}

export default Productspage
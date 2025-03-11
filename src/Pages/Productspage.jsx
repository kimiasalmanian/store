import Card from "../components/Card"
import Loder from "../components/Loder"
import { useproducts } from "../context/ProductsContext"

import styles from "./productspage.module.css"


function Productspage() {

    const products=useproducts()
    console.log(products)

  return (
  <div className={styles.container}>
    <div className={styles.products} >
    {!products.length && <Loder/>}
    {products.map((p) => <Card key={p.id} data={p}/>)}
    </div> 
   <div>
    sidebar
   </div>

     
  </div>
  )
} 

export default Productspage
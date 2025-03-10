import Card from "../components/Card"
import { useproducts } from "../context/ProductsContext"


function Productspage() {

    const products=useproducts()
    console.log(products)

  return (
    <div>
{products.map((p) => <Card key={p.id} data={p}/>)}
{!products.length && <p>loding...</p>}

    </div>  
  )
} 

export default Productspage
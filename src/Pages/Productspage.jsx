import { useEffect, useState } from "react"

import Card from "../components/Card"
import Loder from "../components/Loder"
import Search from "../components/Search"
import { useproducts } from "../context/ProductsContext"

import styles from "./productspage.module.css"


function Productspage() {

    const products=useproducts();
    const [displayd,setdisplayd]=useState([]);
    const [query,setquery]=useState({});

    useEffect (() => {
      setdisplayd(products)
    },[products]);

   

  return (
    <>
     <div><Search query={query} setquery={setquery} setdisplayd={setdisplayd} /></div>
  <div className={styles.container}>
    <div className={styles.products} >
    {!displayd.length && <Loder/>}
    {displayd.map((p) => <Card key={p.id} data={p}/>)}
    </div> 
   <div>
    sidebar
   </div>

     
  </div>
  </>
  )
} 

export default Productspage
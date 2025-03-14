import { useEffect, useState } from "react"

import Card from "../components/Card"
import Loder from "../components/Loder"
import Search from "../components/Search"
import { useproducts } from "../context/ProductsContext"
import { filterproducts, getinitialquery, searchproducts } from '../helpes/helpe'

import styles from "./productspage.module.css"
import Category from "../components/Category"
import { useSearchParams } from "react-router-dom"


function Productspage() {

    const products=useproducts();
    const [displayd,setdisplayd]=useState([]);
    const [query,setquery]=useState({});
    const [search,setsearch]=useState("");
    const[searchparams,setsearchparams]=useSearchParams()

    useEffect (() => {
      setdisplayd(products)
      setquery(getinitialquery(searchparams))
    },[products]);

    useEffect (() => {
      setsearchparams(query)
      setsearch(query.search || "")
      let finalproducts = searchproducts(products, query.search)
      finalproducts = filterproducts(finalproducts , query.category)
      setdisplayd(finalproducts)
      
  } ,[query])

   

  return (
    <>
     <div><Search query={query} setquery={setquery} search={search} setsearch={setsearch}/></div>
  <div className={styles.container}>
    <div className={styles.products} >
    {!displayd.length && <Loder/>}
    {displayd.map((p) => <Card key={p.id} data={p}/>)}
    </div> 
   <div>
    <Category  setquery={setquery}/> 
   </div>

     
  </div>
  </>
  )
} 

export default Productspage
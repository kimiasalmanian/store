import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useproducts } from '../context/ProductsContext'
import { searchproducts } from '../helpes/helpe'

import styles from "./search.module.css"

function Search({query,setquery,setdisplayd}) {
const products=useproducts([]);
const [search,setsearch]=useState("");


useEffect (() => {
    const finalproducts = searchproducts(products, query.search)
    setdisplayd(finalproducts)
} ,[query])

const searchhandler=() => {
    setquery((query) => ({...query,search}))
}

  return (
    <div className={styles.search}>

<input placeholder='Search...'  type='text' value={search} 
onChange={(e)=>setsearch(e.target.value.toLowerCase().trim())}></input>
<button onClick={searchhandler}><FaSearch/></button>

    </div>
  )
}

export default Search
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { useproducts } from '../context/ProductsContext'


import styles from "./search.module.css"
import { createqueryobject } from '../helpes/helpe';

function Search({query,setquery,search,setsearch}) {
const products=useproducts([]);





const searchhandler=() => {
    setquery((query) => createqueryobject(query, { search}))
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
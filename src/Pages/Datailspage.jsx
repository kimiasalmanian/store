import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useproductsdatails } from '../context/ProductsContext';

import Loder from '../components/Loder';
import styles from "./Detailsproducts.module.css"
import { SiOpenproject } from 'react-icons/si';
import { IoMdPricetag } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';

function Datailspage() {

const {id}=useParams();
const productsdatails=useproductsdatails(+id)
if (!productsdatails) return <Loder/>

  return (
    <div className={styles.container}>
      <img src={productsdatails.image} alt={productsdatails.title}/>
      <div className={styles.information}>
        <h3>{productsdatails.title}</h3>
        <p className={styles.description}>{productsdatails.description}</p>
        <p className={styles.category}>
          <SiOpenproject/>
          {productsdatails.category}</p>
          <div>
        <span>
          <IoMdPricetag/>
          {productsdatails.price}$</span>
        <Link to ="/products">
        <FaArrowLeft/>
        <span>Back to shop</span></Link>
      </div>
      </div>
     


    </div>
  )
}

export default Datailspage
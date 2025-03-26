
import { IoBagCheckOutline } from 'react-icons/io5'
import { useCart } from '../context/Cartcontext'
import { Link } from 'react-router-dom'

import styles from './layout.module.css'

function Layout({children}) {

    const [state]=useCart()
  return (
    <>
    <header className={styles.header}>
        
<Link to="/products"> Store</Link>

<div>
<Link to="/checkout"><IoBagCheckOutline/></Link>
    {!!state.itemcounter && <span>{state.itemcounter}</span>}
</div>

 </header>

{children}

<footer className={styles.footer}>
Developed by kimia 

</footer>
    
    
    
    </>
  )
}

export default Layout
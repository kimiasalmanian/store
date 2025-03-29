import { BsPatchCheck } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { TbChecklist } from "react-icons/tb"

import styles from "./Basketsidebar.module.css"


function Basketsidebar({state , clickhandler}) {
  return (
    <div className={styles.sidebar}>
        <div>
            <TbChecklist/>
        <p>Total:</p>
        <span>{state.total}$</span>
        </div>
        <div>
            <FaHashtag/>
        <p>Quantity:</p>
        <span>{state.itemcounter}</span>
        </div>
        <div>
            <BsPatchCheck/>
        <p>Statuse:</p>
        <span>{!state.checkout && "Pending..."}</span>
        </div>
        <div>
            <button onClick= {()=>clickhandler("CHECKOUT")}> Checkout</button>
        </div>
    </div>
  )
}

export default Basketsidebar
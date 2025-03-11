import { RingLoader } from "react-spinners"
import styles from "./loder.module.css"

function Loder() {
  return (
    <div className={styles.loder}>

<RingLoader
  color="#6a0eb3"
  size={90}
  speedMultiplier={1}
  />

 </div>
  )
}

export default Loder

import { BiCategoryAlt } from 'react-icons/bi'
import { createqueryobject } from '../helpes/helpe';
import { categoris } from '../constans/list';

import  styles from "./category.module.css"

function Category({query,setquery}) {

    const categoryhandler=(event) => {
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase();
      
      if (tagName !=="LI") return;
      setquery((query) => createqueryobject(query , { category }))
    }
  return (
    <div className={styles.category}>
    <div><BiCategoryAlt/>
    <p>Category</p>
    </div>
    
        <ul onClick={categoryhandler}>
           {categoris.map((item)=>(<li key={item.id} 
           className={item.type.toLowerCase()=== query.category ? styles.selected : null}>
            {item.type}</li>))}
        </ul>
    
    </div>
  )
}

export default Category

import { BiCategoryAlt } from 'react-icons/bi'
import { createqueryobject } from '../helpes/helpe';

function Category({setquery}) {

    const categoryhandler=(event) => {
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase();
      
      if (tagName !=="LI") return;
      setquery((query) => createqueryobject(query , { category }))
    }
  return (
    <div>
    <div><BiCategoryAlt/>
    <p>Category</p>
    </div>
    
        <ul onClick={categoryhandler}>
            <li>ALL</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
        </ul>
    
    </div>
  )
}

export default Category
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";



const ProductsContext=createContext()

function ProductsProvider({children}) {

    const [products,setproducts]=useState([]);

    useEffect( () =>{
        const fetchproducts = async () =>{
            try {
            
             const response = await api.get("/products") 
         
            setproducts(response)
                
            } 
            catch (error) {
                console.log(error.message)
                
            }
        
        };

    fetchproducts()
        
          
} ,[]);

  return (
    <ProductsContext.Provider value={products}>
        {children}
    </ProductsContext.Provider>
  )
};

const useproducts = () => {
    const products = useContext(ProductsContext)
    return products
};

const useproductsdatails=(id) =>{
    const products = useContext(ProductsContext)   
    const result= products.find((products) => products.id=== id)
    return result
}

export default ProductsProvider;
export {useproducts , useproductsdatails};
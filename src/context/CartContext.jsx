import { useContext } from "react";
import { createContext, useReducer } from "react";
import { sumproducts } from "../helpes/helpe";

const initialstate ={
    selecteditem:[],
    total:0,
    itemcounter:0,
    checkout:false
}

const reducer = (state, action) =>{
    console.log(action)
    switch (action.type) {
        case "ADD_ITEM":
          if  (!state.selecteditem.find((item) => item.id===action.payload.id)){
            state.selecteditem.push({...action.payload , quantity:1})}

            return {
                ...state,
                ...sumproducts(state.selecteditem),
                checkout:false
            }
            
            
            
    
        default:
            throw new Error("Action is not valied!");
            
    }
}

const CartContext=createContext()

function CartProvider({children}) {

    const [state , dispatch]= useReducer (reducer , initialstate)


  return (

        <CartContext.Provider value={{ state , dispatch}}>
            {children}
            
        </CartContext.Provider>
    
  )
}

const useCart=() => {
   const {state , dispatch}= useContext(CartContext)
   return [state , dispatch ]; 
    
    
}

export default CartProvider;
export {useCart};
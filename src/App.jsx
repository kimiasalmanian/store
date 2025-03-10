import { Navigate, Route, Routes } from "react-router-dom"
import Productspage from "./Pages/Productspage"
import Datailspage from "./Pages/Datailspage"
import Checkout from "./Pages/Checkout"
import Pagenotfound from "./Pages/Pagenotfound"



function App() {
 return (
  
  <Routes>
    <Route index element={<Navigate to="/products" replace/>}/>
    <Route path="/products" element={<Productspage/> } />
    <Route path="/products/:id" element={<Datailspage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/*" element={<Pagenotfound/>}/>


  </Routes>

  )
}

export default App

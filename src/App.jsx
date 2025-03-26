import { Navigate, Route, Routes } from "react-router-dom"
import Productspage from "./Pages/Productspage"
import Datailspage from "./Pages/Datailspage"
import Checkout from "./Pages/Checkout"
import Pagenotfound from "./Pages/Pagenotfound"
import ProductsProvider from "./context/ProductsContext"
import CartProvider from "./context/Cartcontext"
import Layout   from "./layout/layout"




function App() {
 return (
  
<CartProvider>
<ProductsProvider>
<Layout>

<Routes>
    <Route index element={<Navigate to="/products" replace/>}/>
    <Route path="/products" element={<Productspage/> } />
    <Route path="/products/:id" element={<Datailspage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/*" element={<Pagenotfound/>}/>
 </Routes>
 
 </Layout>
</ProductsProvider>
</CartProvider>
 
  

  

  )
}

export default App

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from "../src/components/Cart/Cart"
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "../src/components/NavBar/NavBar"
import CartProvider from "./contexts/CartContext";




function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/comida/:comidaId' element={<ItemListContainer/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

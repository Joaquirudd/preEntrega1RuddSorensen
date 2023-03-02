import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from "../src/components/CartWidget/CartWidget"
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "../src/components/NavBar/NavBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/comida/:comidaId' element={<ItemListContainer/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="PRODUCTOS"/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="PRODUCTOS" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer /> } />
            <Route path='*' element={<ItemListContainer greeting="PRODUCTOS" />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

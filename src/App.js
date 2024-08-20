import './App.css';

import {Routes, Route} from 'react-router-dom';
import {DetailPage, HomePage, ProductsPage, ProfilePage, CreateProductPage} from './pages/Pages.jsx';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const cart = localStorage.getItem('cart');
    const likedProducts = localStorage.getItem('likedProducts');
    if (cart === null) {
      localStorage.setItem('cart', '{}');
    }
    if (likedProducts === null) {
      localStorage.setItem('likedProducts', '{}');
    }
  }, [])
  return (
    <Routes>
      <Route path='products/create' element={<CreateProductPage />}/>
      <Route path='/products/:id' element={<DetailPage />} />
      <Route path='/products/' element={<ProductsPage />} />
      <Route path='/user/:id' element={<ProfilePage />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
);
}

export default App;

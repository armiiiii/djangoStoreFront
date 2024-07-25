import './App.css';

import {Routes, Route} from 'react-router-dom';
import {DetailPage, HomePage, ProductsPage, ProfilePage} from './pages/Pages.jsx';


function App() {
  return (
    <Routes>
      <Route path='/products/:id' element={<DetailPage />} />
      <Route path='/products/' element={<ProductsPage />} />
      <Route path='/user/:id' element={<ProfilePage />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
);
}

export default App;

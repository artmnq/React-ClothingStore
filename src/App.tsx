import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullItem from './pages/FullItem';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/React-ClothingStore" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<FullItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

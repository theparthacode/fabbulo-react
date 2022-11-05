import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ShopPage from './Pages/ShopPage';
import MenPage from './Pages/MenPage';
import WomenPage from './Pages/WomenPage';
import ContactPage from './Pages/ContactPage';
import Blog from './Pages/Blog';
import Bag from './Pages/Bag';
import Login from './Pages/Login';
import Wishlist from './Pages/Wishlist';
import Orders from './Pages/Order';
import Giftcards from './Pages/Giftcards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/giftcards" element={<Giftcards />} />
          <Route path="*" element={<h1>Error 404 Page not found!!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

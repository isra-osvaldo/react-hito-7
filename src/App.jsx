import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </UserProvider>
  );
};

export default App;

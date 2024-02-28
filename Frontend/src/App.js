import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import ProductView from './components/ProductView';
import Register from './components/Register';
import AddProd from './components/AddProd';
import DeleteProd from './components/DeleteProd';
import UpdateProd from './components/UpdateProd';
import CartDetails from './components/CartDetails';
import UserProfile from './components/UserProfile';
import PlaceOrder from './components/PlaceOrder';
import PaymentScreen from './components/PaymentScreen';
import NFTDetails from './components/NFTDetails';
import Login from './components/Login';
import WelcomePage from './components/welcomepage/WelcomePage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('access_token') ? true : false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('access_token') ? true : false;
    console.log("isLoggedIn useEffect:", loggedIn); // Log current login status
    setIsLoggedIn(loggedIn);
  }, []); 

  const handleLogin = (success) => {
    if (success) {
      localStorage.setItem('isLoggedIn',true);
      setIsLoggedIn(true);
    }
    
  };

  const onLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false); // Update the logged-in state
};
  return (
    <Router>
      <React.Fragment>
        <Navbar onLogout={onLogout} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/ProductView" element={isLoggedIn ? <ProductView /> : <Navigate to="/login" replace />} />
          <Route path="/AddProd" element={isLoggedIn ? <AddProd /> : <Navigate to="/login" replace />} />
          <Route path="/DeleteProd" element={isLoggedIn ? <DeleteProd /> : <Navigate to="/login" replace />} />
          <Route path="/UpdateProd" element={isLoggedIn ? <UpdateProd /> : <Navigate to="/login" replace />} />
          <Route path="/CartDetails" element={isLoggedIn ? <CartDetails /> : <Navigate to="/login" replace />} />
          <Route path="/UserProfile" element={isLoggedIn ? <UserProfile /> : <Navigate to="/login" replace />} />
          <Route path="/PlaceOrder" element={isLoggedIn ? <PlaceOrder /> : <Navigate to="/login" replace />} />
          <Route path="/PaymentScreen" element={isLoggedIn ? <PaymentScreen /> : <Navigate to="/login" replace />} />
          <Route path="/NFTDetails" element={isLoggedIn ? <NFTDetails /> : <Navigate to="/login" replace />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="*" element={<Default />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default App;

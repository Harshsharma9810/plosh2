import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignUpPage/SignUp';
import Categories from '../Pages/Categories/Categories';
import RestaurantDetail from '../Pages/RestaurantDetail/RestaurantDetail';
import UpdateProfile from '../Pages/ProfilePage/UpdateProfile';
import Forgot from "../Pages/ForgotPage/Forgot.js";
import ProtectedRoutes from './ProtectedRoutes';
import ChangePassword from "../Pages/ChangePassword/ChangePassword.js"

const Routee = ({ isMenuVisible, setIsMenuVisible }) => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route 
        path="/" 
        element={token ? <Navigate to="/home" /> : <Login token={token} />}
      />

      <Route 
        path="/register" 
        element={token ? <Navigate to="/home" /> : <SignUp />}
      />
      <Route 
        path="/home/*"
        element={
          <ProtectedRoutes>
            <Home token={token} />
          </ProtectedRoutes>
        }
      />
      <Route 
        path="/categories" 
        element={
          <ProtectedRoutes>
            <Categories />
          </ProtectedRoutes>
        }
      />
      <Route 
        path="/restaurantdetail" 
        element={
          <ProtectedRoutes>
            <RestaurantDetail />
          </ProtectedRoutes>
        }
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoutes>
            <UpdateProfile />
          </ProtectedRoutes>
        }
      />
      <Route 
        path="/changepassword" 
        element={
          <ProtectedRoutes>
            <ChangePassword/>
          </ProtectedRoutes>
        }
      />
      <Route 
        path="/forgot" 
        element={token ? <Navigate to="/home" /> : <Forgot />}
      />
      <Route 
        path="/*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default Routee;


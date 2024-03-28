import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/LoginPage/Login'
import SignUp from '../Pages/SignUpPage/SignUp'
import Home from "../Pages/Home/Home"
import Forgot from "../Pages/ForgotPage/Forgot.js"
import Header from '../components/Header/Header'
import SideMenu from '../components/SideMenu/SideMenu'
import ProtectedRoutes from './ProtectedRoutes'
import Categories from '../Pages/Categories/Categories'
import RestaurantDetail from '../Pages/RestaurantDetail/RestaurantDetail'
import UpdateProfile from '../Pages/ProfilePage/UpdateProfile'


const Routee = ({isMenuVisible, setIsMenuVisible}) => {
  const token = localStorage.getItem("token")
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Header token={token} />
            <Login token={token}/>
          </>
        }
      />
      <Route 
        path="/register" 
        element={
          <>
            <Header/>
            <SignUp/>
          </>
        }
      />
      
      <Route 
        path="/home" 
        element={
          <>
           {/* <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} token={token}/> */}
            <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} token={token}/>
            <ProtectedRoutes isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} token={token}>
              <Home token={token}/>
            </ProtectedRoutes>
          </>
        }
      />


      <Route 
        path="/categories" 
        element={
          <>
           {/* <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} /> */}
            <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
          
              <Categories/>
            
          </>
        }
      />
      <Route 
        path="/restaurantdetail" 
        element={
          <>
           {/* <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/> */}
            <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
          
              <RestaurantDetail/>
            
          </>
        }
      />

      <Route 
        path="/profile" 
        element={
          <>
           {/* <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} /> */}
            <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
              <UpdateProfile/>
            
          </>
        }
      />

      
      <Route 
        path="/forgot" 
        element={
          <>
            <Header/>
            <Forgot/>
          </>
        }
      />
     
    </Routes>
  )
}

export default Routee
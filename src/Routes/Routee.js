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
  const [isLogin,setIsLogin] = useState(false)
  console.log(isLogin,"1")

  const temp= localStorage.getItem("isLogin") 
  useEffect(()=>{
    if(temp==="true"){
      setIsLogin(true)
    }
  },[])
  
  if(isLogin===false){
    setIsMenuVisible(false)
  }


  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Login isLogin={isLogin} setIsLogin={setIsLogin}/>
          </>
        }
      />
      <Route 
        path="/register" 
        element={
          <>
            <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
            <SignUp/>
          </>
        }
      />
      
      <Route 
        path="/home" 
        element={
          <>
           <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} isLogin={isLogin}setIsLogin={setIsLogin}/>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
            <ProtectedRoutes isLogin={isLogin} setIsLogin={setIsLogin} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}>
              <Home isLogin={isLogin} setIsLogin={setIsLogin}/>
            </ProtectedRoutes>
          </>
        }
      />


      <Route 
        path="/categories" 
        element={
          <>
           <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} isLogin={isLogin}setIsLogin={setIsLogin}/>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
          
              <Categories/>
            
          </>
        }
      />
      <Route 
        path="/restaurantdetail" 
        element={
          <>
           <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} isLogin={isLogin}setIsLogin={setIsLogin}/>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
          
              <RestaurantDetail/>
            
          </>
        }
      />

      <Route 
        path="/profile" 
        element={
          <>
           <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} isLogin={isLogin}setIsLogin={setIsLogin}/>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
              <UpdateProfile/>
            
          </>
        }
      />

      
      <Route 
        path="/forgot" 
        element={
          <>
            <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Forgot/>
          </>
        }
      />
     
    </Routes>
  )
}

export default Routee
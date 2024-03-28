import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import Button from '../Button/Button'
import plosh from "../Images/plosh.png"
import { useLocation, useNavigate } from 'react-router-dom'
import {toast } from "react-toastify";
import home from "../Images/home.png"
import categories from "../Images/categories.png"
import restaurant from "../Images/restaurant.png"
import user from "../Images/user.png"
import { CgMenuRight } from "react-icons/cg";
import { API } from '../../API/APIS';



const menuItems = [
  { icon: home, text: 'Home', link: '/home' },
  { icon: categories, text: 'Categories', link: '/categories' },
  { icon: restaurant, text: 'Restaurant', link: '/home' },
  { icon: user, text: 'Profile', link: '/profile' }
];

const Header = ({isMenuVisible, setIsMenuVisible}) => {    

  // console.log(isLogin,"from header")
    let location = useLocation();
    const navigate = useNavigate()
    const changeform=()=>{
      (location.pathname==="/" ? navigate("/register") : navigate("/"))
      // (LoginPage===true)
      //    ? navigate("/") : navigate("/register")
      //    setLoginPage(!LoginPage)
        // setIsMenuVisible(false)
      
      // else{
        // localStorage.removeItem("isLogin");
        // setIsLogin(false);
        // setIsMenuVisible(false)
        // navigate("/")
        // toast.success("You Have logged out succesfully")
      // }
    }


    const handleNavigate = (link) => {
        navigate(link);
  
    };

    
    const openMenu=(e)=>{
      setIsMenuVisible(!isMenuVisible)
      console.log(isMenuVisible,"IAM ")
      e.preventDefault(); 
    }
  const token = localStorage.getItem("token")
      
  return (
    <>
    {token===null?
    <div className={styles.header}>
    <div className={styles.logodiv}>
      <img src={plosh} alt='plosh' className={styles.logo}/>
    </div>
    <div className={styles.logodiv}>
      <Button btntext={location.pathname==="/"? "Register" : "Login"} handleClick={changeform}/>
    </div>
</div>  :
      <div className={styles.header1}>
      <div className={styles.logodiv1}>
        <img src={plosh} alt='plosh' className={styles.logo1}/>
      </div>

      <div className={styles.right}>
            {menuItems.map((item, index) => (
                <div key={index} className={styles.homediv} onClick={() => handleNavigate(item.link)}>
                    <img src={item.icon} alt={item.text} className={styles.homeimg} />
                    <span className={styles.homeheading}>{item.text}</span>
                </div>
            ))}
            <div className={styles.menudiv} onClick={openMenu}>
                <CgMenuRight size={30} />
                <span className={styles.homeheading}>Menu</span>
            </div>
        </div>
    </div>
    

     
    

      

  
    }
    </>
  
  )
}

export default Header
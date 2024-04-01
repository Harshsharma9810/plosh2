import React from 'react'
import styles from "./Header.module.scss"
import Button from '../Button/Button'
import plosh from "../Images/plosh.png"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import home from "../Images/home.png"
import categories from "../Images/categories.png"
import categories1 from "../Images/categories1.png"
import restaurant from "../Images/restaurant.png"
import restaurant1 from "../Images/restaurant1.png"
import user from "../Images/user.png"
import user1 from "../Images/user1.png"
import { CgMenuRight } from "react-icons/cg";



const menuItems = [
  { icon1: home, icon2: home,text: 'Home', link: '/home' },
  { icon1: categories,icon2: categories1, text: 'Categories', link: '/categories' },
  { icon1: restaurant, icon2: restaurant1,text: 'Restaurant', link: '/home' },
  { icon1: user, icon2: user1,text:'Profile', link: '/profile' }
];

const Header = ({isMenuVisible, setIsMenuVisible}) => {    

    let location = useLocation();
    const navigate = useNavigate()
    const changeform=()=>{
      (location.pathname==="/" ? navigate("/register") : navigate("/"))
    }

    // const handleNavigate = (link) => {
    //     navigate(link);
    // };

    const openMenu=(e)=>{
      setIsMenuVisible(!isMenuVisible)
      // console.log(isMenuVisible,"IAM ")
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
        </div>  
        :
        <div className={styles.header1}>
          <div className={styles.logodiv1}>
            <img src={plosh} alt='plosh' className={styles.logo1}/>
          </div>

          <div className={styles.right}>
              {menuItems.map((item, index) => (
                    <NavLink to={item.link} key={index} className={styles.homediv} activeClassName={styles.activehome}
                    >
                      <img
                      src={item.link === window.location.pathname ? item.icon2 : item.icon1}
                        alt={item.text}
                        className={styles.homeimg}
                      />
                      <span className={item.link === window.location.pathname ? styles.homeheading1 : styles.homeheading}>{item.text}</span>
                    </NavLink>

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
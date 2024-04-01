import React from 'react'
import styles from "./SideMenu.module.scss"
import close from "../Images/close.png"
import { useNavigate } from 'react-router-dom'
import {toast } from "react-toastify";
import plosh from "../Images/plosh.png"
import profilepicture from "../Images/profilepicture.png"
import save1 from "../Images/save1.png"
import arrow from "../Images/arrow.png"
import sideuser from "../Images/sideuser.png"
import password1 from "../Images/password1.png"
import logout from "../Images/logout.png"


const SideMenu = ({isMenuVisible,setIsMenuVisible,token}) => {
    const navigate= useNavigate();
    const changeform=()=>{
          localStorage.removeItem("isLogin");
          localStorage.removeItem("token")
        //   setIsLogin(false);
          navigate("/")
          setIsMenuVisible(false)
          toast.success("You Have logged out succesfully")
      }

      const profile = ()=>{
        navigate("/profile")
        setIsMenuVisible(!isMenuVisible)
      }
      const password = ()=>{
        navigate("/changepassword")
        setIsMenuVisible(!isMenuVisible)
      }
     
  return (
    <>
      {/* {token!==null &&  */}
        <div className={`${styles.menu} ${isMenuVisible && styles.open}`} >
            <div className={styles.topbox}>

                <div className={styles.logobox} >
                    <img src={plosh} alt='logo' className={styles.logo}/>
                </div>
            
                <div className={styles.close} onClick={()=>setIsMenuVisible(!isMenuVisible)}>
                    <img src={close} className={styles.close} alt='close'/>
                </div>
            </div>
            <div className={styles.bottombox}>
                <div className={styles.profile}>
                    <img src={profilepicture} alt='profile' className={styles.profilepicture}/>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.email}>loremipsum@mail.com</div>
                    </div>
                </div>
               


                    {/* Favourites */}
                <div className={styles.favourite}>
                    <div className={styles.leftbox}>
                        <div className={styles.imgdiv}>
                            <img src={save1} alt='fav' className={styles.fav}/>
                        </div>
                        <div className={styles.heading}>Favourites</div>
                    </div>
                    <div className={styles.rightbox}>
                        <img src={arrow} alt='arrow' className={styles.arrow}/>
                    </div>
                </div>

                    {/* Profile */}
                <div className={styles.favourite} onClick={profile}>
                    <div className={styles.leftbox}>
                        <div className={styles.imgdiv}>

                            <img src={sideuser} alt='fav' className={styles.fav}/>
                        </div>
                        <div className={styles.heading}>Your Profile</div>
                    </div>
                    <div className={styles.rightbox}>
                        <img src={arrow} alt='arrow' className={styles.arrow}/>
                    </div>
                </div>

                    {/* Change Password */}
                <div className={styles.favourite} onClick={password}>
                    <div className={styles.leftbox}>
                        <div className={styles.imgdiv}>

                            <img src={password1} alt='fav' className={styles.fav}/>
                        </div>
                        <div className={styles.heading}>Change Password</div>
                    </div>
                    <div className={styles.rightbox}>
                        <img src={arrow} alt='arrow' className={styles.arrow}/>
                    </div>
                </div>

                    {/* Logout */}
                <div className={styles.favourite} onClick={changeform}>
                    <div className={styles.leftbox}>
                        <div className={styles.imgdiv}>
                            <img src={logout} alt='fav' className={styles.fav}/>
                        </div>
                        <div className={styles.heading}>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    {/* } */}
    </>
  )
}

export default SideMenu
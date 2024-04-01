import React, {useState } from 'react'
import styles from "./Login.module.scss"
import { useForm} from "react-hook-form";
import InputBox from '../../components/InputBox/InputBox';
import plosh from "../../components/Images/plosh.png"
import Button from '../../components/Button/Button';
import { API } from '../../API/APIS';
import hide from "../../components/Images/hide.png"
import {useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {toast } from "react-toastify";
import ClipLoader from "../../components/common/Spinner"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const Login = () => {
  const [loader,setLoader] = useState(false)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const log=()=>{
    console.log("Button clicked")
  }

const { control,handleSubmit,formState: { errors }} = useForm();

  const onSubmit =(values)=>{    
    login(values)
  }

  const login=async(data)=>{
    setLoader(true)
      const vals = {
        email: data.email,
        password: data.password,
      };

      try {
        const response = await API.login(vals)
        
        if(response?.success){
          toast.success(response?.message)
          localStorage.setItem("token",response.token);
          navigate("/home")
        }
        else{
          toast.error(response.message)
      }
        
      } catch (error) {
          toast.error("OOPS ! Something Went Wrong.")
        }
      finally{
        setLoader(false)
      }
  }
 
  return (
    <>
      <div className={styles.loginbox}>
      <img src={plosh} alt='plosh' className={styles.img}/>
        <h1 className={styles.heading}>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
        
        <div className={styles.inputs}>

          <div className={styles.address}>
            <label className={styles.label}>Email Address</label>
            <InputBox name="email"  control={control} required type="text" placeholder={"Enter Your Email Address"}/>
          </div>
          <p className={styles.error}>{errors.email?.message}</p>

          <div className={styles.address}>
            <label className={styles.label}>Password</label>

            <div className={styles.showhide}>
              <InputBox name="password" control={control} required type={showPassword ? "text" : "password"} placeholder={"Enter Your Password"}/>
              <span  className={styles.hideimg} onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? <FaEye/> : <FaEyeSlash/>}
            </span>
            </div> 
            </div>
            <p className={styles.error}>{errors.password?.message}</p>

        </div>
        <div className={styles.forgotdiv}>
        <span className={styles.forgot} onClick={()=>{navigate("/forgot")}}>Forgot password ?</span>
        </div>
      <div className={styles.btndiv} >
      {loader===false ? <Button btntext={"Login"} handleClick={log}/> :
          <Button btntext={<ClipLoader size={15} color={"black"}/>} handleClick={log}/> }
        </div>
      </form>
        <div className={styles.toggleform}>Dont have an account ? <span onClick={()=>{navigate("/register")}} className={styles.togglespan}>Register</span></div>
      </div>
    </>
    
  )
}

export default Login



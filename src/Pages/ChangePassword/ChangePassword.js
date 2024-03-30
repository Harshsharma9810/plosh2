import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from "./ChangePassword.module.scss"
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import hide from "../../components/Images/hide.png"
import plosh from "../../components/Images/plosh.png"
import {useNavigate } from 'react-router-dom';
import { API } from '../../API/APIS';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "../../components/common/Spinner"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const ChangePassword = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [loader,setLoader] = useState(false)
    const navigate=useNavigate()
    // const navigate = useNavigate();
    const schema = yup.object().shape({
      newPassword: yup.string().matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-:-@[-`{-~]).{8,}$/,
        "Your password should contain a combination of uppercase and lowercase letters, at least one number, and at least one special character."
      )
      .required("Please enter your password."),
      confirmPassword: yup.string()
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
      .required('Please confirm your password')
    });

    const { control,handleSubmit,formState: { errors }} = useForm({
      resolver: yupResolver(schema),});

      const log = ()=>{
      //  console.log("Form Submitted")
      }
      const token = localStorage.getItem("token")
    const onSubmit = async(values)=>{
      console.log(values,"1") 
      try {
        setLoader(true)
        console.log(values,"2") 

        const response = await API.ChangePassword(values,token)
        console.log(response,"5")
        if(response?.success){
            toast.success(response.message)
            navigate("/home")
        }
        else{
            toast.error(response?.message)
        }
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoader(false)

      }
     }

  return (

    <div className={styles.loginbox}>
    <img src={plosh} alt='plosh' className={styles.img}/>
      <h1 className={styles.heading}>{"Change Password"}</h1>

    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
      <div className={styles.inputs}>

        <div className={styles.address}>
          <label className={styles.label}>Old Password</label>
          <div className={styles.showhide}>
            <InputBox name="oldPassword" control={control} required type={showOldPassword ? "text" : "password"} />
            <span className={styles.hideimg} onClick={()=>setShowOldPassword(!showOldPassword)}>
              {showOldPassword ? <FaEye/> : <FaEyeSlash/>}
            </span>

          </div> 
          <p className={styles.error}>{errors.oldPassword?.message}</p>
          </div>

        <div className={styles.address}>
          <label className={styles.label}>New Password</label>

          <div className={styles.showhide}>
            <InputBox name="newPassword" control={control} required type={showPassword1 ? "text" : "password"} />
            <span className={styles.hideimg} onClick={()=>setShowPassword1(!showPassword1)}>
              {showPassword1 ? <FaEye/> : <FaEyeSlash/>}
            </span>
          </div> 
          <p className={styles.error}>{errors.newPassword?.message}</p>
          </div>

        <div className={styles.address}>
          <label className={styles.label}>Confirm New Password</label>

          <div className={styles.showhide}>
            <InputBox name="confirmPassword" control={control}  required type={showPassword2 ? "text" : "password"}/>
            <span className={styles.hideimg} onClick={()=>setShowPassword2(!showPassword2)}>
              {showPassword2 ? <FaEye/> : <FaEyeSlash/>}
            </span>
          </div> 

          <p className={styles.error}>{errors.confirmPassword?.message}</p>
          </div>
      </div>

      <div className={styles.btndiv} >
        {loader===false ? <Button btntext={"Change Password"} styleType={"button4"} handleClick={log}/> :
        <Button btntext={<ClipLoader size={16} color={"white"}/>} handleClick={log}/> }
      </div>
    </form>
    
    </div>
  )
}

export default ChangePassword




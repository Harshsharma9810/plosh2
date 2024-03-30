import React, { useState } from 'react'
import styles from "./Forgot.module.scss"
import { useForm} from "react-hook-form";
import InputBox from '../../components/InputBox/InputBox';
import plosh from "../../components/Images/plosh.png"
import Button from '../../components/Button/Button';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ClipLoader from "../../components/common/Spinner"
import { API } from '../../API/APIS';
import { toast } from "react-toastify";



const Forgot = () => {
    const [loader,setLoader] = useState(false)

    const log =()=>{
        
    }

    

    const schema = yup.object().shape({
        email: yup.string().matches(
          /^[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          "Enter a valid email address"
        )
        .required("Please enter your email address."),
    })
    const { control,handleSubmit,formState: { errors }} = useForm({resolver: yupResolver(schema),})

    const onSubmit = (value)=>{
        console.log(value,"Forgot")
        forgotPassword(value)
    }

    const forgotPassword=async(data)=>{
        setLoader(true)
        console.log(data,"from forgotpassword function")
        const param = {
            email:data.email
        }
        console.log(data.email)
        try {
        
            let response = await API.forgotPassword(param)
            if(response?.success){

                toast.success(response.message)
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
        <div className={styles.forgot}>
        <img src={plosh} alt='plosh' className={styles.img}/>
          <h1 className={styles.heading}>Forgot Password</h1>
    
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          
          <div className={styles.inputs}>
    
            <div className={styles.address}>
              <label className={styles.label}>Email Address</label>
              <InputBox name="email"  control={control} required type="text" placeholder={"Enter Your Email Address"}/>
            </div>
            <p className={styles.error}>{errors.email?.message}</p>    
          </div>
    
         
         <div className={styles.btndiv} >
         {loader===false ? <Button btntext={"Continue"} handleClick={log}/> :
            <Button btntext={<ClipLoader size={16} color={"white"}/>} handleClick={log}/> }
          </div>
        </form>
        </div>
    
      )
  
}

export default Forgot
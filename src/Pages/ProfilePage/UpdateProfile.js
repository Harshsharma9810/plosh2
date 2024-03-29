import React, { useEffect, useRef, useState } from 'react'
import styles from "./UpdateProfile.module.scss"
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import userupdate from "../../components/Images/userupdate.png"
import plusicon from "../../components/Images/plusicon.png"
import { API } from '../../API/APIS';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "../../components/common/Spinner"
import CategoryShimmerUI from "../../components/common/CategoryShimmerUI/CategoryShimmerUI"
import UpdateShimmerUI from '../../components/common/UpdateShimmerUI/UpdateShimmerUI';

const UpdateProfile = () => {
    const [loader,setLoader] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileData, setprofileData] = useState([]);

    const schema = yup.object().shape({
        name:yup.string().required("Please enter your name"),
        phone: yup.string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Please enter your contact number.'),
  
        email: yup.string()
        .email("Please enter a valid email address")
        .required(`Please enter your email address.`),
      });
  
      const { control,handleSubmit,formState: { errors },reset} = useForm({
        resolver: yupResolver(schema),});
  
        const log = ()=>{
        //  console.log("Form Submitted")
        }
        const token = localStorage.getItem("token")

        const onSubmit= async(data)=>{
            data.file=selectedFile
                 try {
                  setLoader(true)
                   const response = await API.updateProfile(data, token);
                   console.log(response);
                   if (response?.success) {
                     toast.success(response?.message);
                   } else {
                     console.log({ response });
                     toast.error(response?.message);
                   }
                 } catch (error) {
                   console.log(error);
                 }
                 finally{
                  setLoader(false)
                 }
               };

               useEffect(()=>{                  
                 getUserProfile();
              },[])
              
              const getUserProfile=async()=>{
               try {
                   const response = await API.getProfile(token)
                   if(response?.success){
                      //  toast.success(response?.message)
                       setprofileData(response.data)
                       reset(response.data);
                   }
               } catch (error) {
                   console.log(error)
               }
           }
            
    const inputRef = useRef(null);

    const handleAddClick = () => {
        inputRef.current.click();
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const imageUrl = `${process.env.REACT_APP_API_URL}${profileData.avatar}`;

  return (
    <>
  
      {profileData.length===0? <UpdateShimmerUI/> : 
    <div className={styles.loginbox}>
      <h1 className={styles.heading}>{"Update Profile"}</h1>
      <div className={styles.bigimgbox}>
        <div className={styles.imgbox}>
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : profileData.avatar===null ? userupdate : imageUrl} alt="User" className={styles.img} />
            {/* <img src={selectedFile ? URL.createObjectURL(selectedFile) : userupdate} alt="User" className={styles.img} /> */}
            <div className={styles.addFile} >
              <img src={plusicon} alt="Add File" className={styles.plus} onClick={handleAddClick} style={{cursor:"pointer", zIndex: "-2"}} />
              <input name="avatar" ref={inputRef} control={control} type="file" 
                style={{display:"none"}} onChange={handleFileUpload} />
            </div> 
        </div>
       </div>  
       {profileData &&
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>         
        <div className={styles.address}>
          <label className={styles.label}>Full name</label>
          <InputBox name="name" control={control} required type="text" defaultValue={profileData.name || ""}/>
        </div>
        <p className={styles.error}>{errors.username?.message}</p>

        <div className={styles.address}>
          <label className={styles.label}>Phone number</label>
          <InputBox name="phone" control={control}  required type="text" defaultValue={profileData.phone || ""} />
        </div>
        <p className={styles.error}>{errors.phone?.message}</p>

        <div className={styles.address}>
          <label className={styles.label}>Email Address</label>
          <InputBox name="email" control={control} required  type="text" defaultValue={profileData.email || ""} readOnly={true}/>
        </div> 
        <p className={styles.error}>{errors.email?.message}</p>
      </div>

      <div className={styles.btndiv} >
        {loader===false ? <Button btntext={"Update"} handleClick={log}/> :
        <Button btntext={<ClipLoader/>} handleClick={log}/> }
      </div>
    </form>}
 
    </div>}
    </>
  )
}

export default UpdateProfile
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import styles from "./SignUp.module.scss"
// import InputBox from '../../components/InputBox/InputBox';
// import Button from '../../components/Button/Button';
// import hide from "../../components/Images/hide.png"
// import plosh from "../../components/Images/plosh.png"
// import { useNavigate } from 'react-router-dom';
// import { API } from '../../API/APIS';
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import ClipLoader from "../../components/common/Spinner"
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";



// const SignUp = () => {
//     const [showPassword1, setShowPassword1] = useState(false);
//     const [showPassword2, setShowPassword2] = useState(false);
//     const [loader,setLoader] = useState(false)
//     const navigate = useNavigate();
//     const schema = yup.object().shape({
//       name:yup.string().required("Please enter your name"),
//       // phone: yup.number("Please enter valid number format").required(`Please enter your contact number.`),
//       phone: yup.string()
//       .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
//       .required('Please enter your contact number.'),

//       email: yup.string()
//       .email("Please enter a valid email address")
//       .required(`Please enter your email address.`),
//       password: yup.string().matches(
//         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-:-@[-`{-~]).{8,}$/,
//         "Your password should contain a combination of uppercase and lowercase letters, at least one number, and at least one special character."
//       )
//       .required("Please enter your password."),
//       confirmPassword: yup.string()
//       .oneOf([yup.ref('password'), null], 'Passwords must match')
//       .required('Please confirm your password')
//     });

//     const { control,handleSubmit,formState: { errors }} = useForm({
//       resolver: yupResolver(schema),});

//       const log = ()=>{
//       //  console.log("Form Submitted")
//       }

//      const onSubmit = (values)=>{
//       // console.log(values,"from onsubmit") 
//         createUser(values)
//      }

//       const createUser=async(data)=>{
//         setLoader(true)
//         let param = {
//           name: data?.name,
//           phone: data?.phone,
//           email: data?.email,
//           password: data?.password,
//           confirmPassword: data?.confirmPassword,
//           role:"USER"
//         };
//         try {
//           let response = await API.createUser(param)

//           if(response?.success){
//             toast.success(response?.message)

//             navigate("/")
//           }
          
//           else{
//             // console.log(response.data.message,"im respomse")
//             toast.error(response.message)
//           }
//         }

//         catch (error) {
//           // console.log(error,"from catch")
//             toast.error("OOPS ! Something Went Wrong.")
//         }
//         finally{
//           setLoader(false)
//         }
        
//       }
      
    

//   return (

//     <div className={styles.loginbox}>
//     <img src={plosh} alt='plosh' className={styles.img}/>
//       <h1 className={styles.heading}>{"Register"}</h1>

//     <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      
//       <div className={styles.inputs}>

//         <div className={styles.address}>
//           <label className={styles.label}>Full name</label>
//           <InputBox name="name" control={control} required type="text" placeholder={"Enter Your Full Name"} />
//         </div>
//         <p className={styles.error}>{errors.username?.message}</p>

//         <div className={styles.address}>
//           <label className={styles.label}>Phone number</label>
//           <InputBox name="phone" control={control}  required type="text" placeholder={"Enter Your Phone Number"}/>
//         </div>
//         <p className={styles.error}>{errors.phone?.message}</p>

//         <div className={styles.address}>
//           <label className={styles.label}>Email Address</label>
//           <InputBox name="email" control={control} required  type="text" placeholder={"Enter Your Email Address"}/>
//         </div> 
//         <p className={styles.error}>{errors.email?.message}</p>
       
//         <div className={styles.address}>
//           <label className={styles.label}>Password</label>

//           <div className={styles.showhide}>
//             <InputBox name="password" control={control} required type={showPassword1 ? "text" : "password"} placeholder={"Enter Your Password"}/>
//             <span className={styles.hideimg} onClick={()=>setShowPassword1(!showPassword1)}>
//               {showPassword1 ? <FaEye/> : <FaEyeSlash/>}
//             </span>
//           </div> 
//           <p className={styles.error}>{errors.password?.message}</p>

//           </div>
//         <div className={styles.address}>
//           <label className={styles.label}>Confirm Password</label>

//           <div className={styles.showhide}>
//             <InputBox name="confirmPassword" control={control}  required type={showPassword2 ? "text" : "password"} placeholder={" Confirm Your Password"}/>
//             <span className={styles.hideimg} onClick={()=>setShowPassword2(!showPassword2)}>
//               {showPassword2 ? <FaEye/> : <FaEyeSlash/>}
//             </span>

//           </div> 

//           </div>
//           <p className={styles.error}>{errors.confirmPassword?.message}</p>
//       </div>

//       <div className={styles.btndiv} >

//         {loader===false ? <Button btntext={"Register"} handleClick={log}/> :
//         <Button btntext={<ClipLoader size={16} color={"white"}/>} handleClick={log}/> }
//       </div>
//     </form>
    
//       <div className={styles.toggleform}>I have an account.<span className={styles.togglespan} onClick={()=>{navigate("/")}}>Login</span></div>
//     </div>
//   )
// }

// export default SignUp


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignUp.module.scss';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import plosh from '../../components/Images/plosh.png';
import { useNavigate } from 'react-router-dom';
import { API } from '../../API/APIS';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import ClipLoader from '../../components/common/Spinner';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    phone: yup
      .string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Please enter your contact number.'),
    email: yup.string().email('Please enter a valid email address').required('Please enter your email address.'),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-:-@[-`{-~]).{8,}$/,
        'Your password should contain a combination of uppercase and lowercase letters, at least one number, and at least one special character.'
      )
      .required('Please enter your password.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm your password'),
  });

  const { control, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(schema),
  });

  const log = () => {
    // console.log("Form Submitted")
  };

  const onSubmit = (values) => {
    // console.log(values,"from onsubmit")
    createUser(values);
  };

  const createUser = async (data) => {
    setLoader(true);
    let param = {
      name: data?.name,
      phone: data?.phone,
      email: data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      role: 'USER',
    };
    try {
      let response = await API.createUser(param);

      if (response?.success) {
        toast.success(response?.message);
        navigate('/');
      } else {
        // console.log(response.data.message,"im respomse")
        toast.error(response.message);
      }
    } catch (error) {
      // console.log(error,"from catch")
      toast.error('OOPS! Something Went Wrong.');
    } finally {
      setLoader(false);
    }
  };

  const handleInputChange = async (e) => {
    await trigger(e.target.name);
  };

  return (
    <div className={styles.loginbox}>
      <img src={plosh} alt='plosh' className={styles.img} />
      <h1 className={styles.heading}>Register</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <div className={styles.address}>
            <label className={styles.label}>Full name</label>
            <InputBox
              name='name'
              control={control}
              required
              type='text'
              placeholder={'Enter Your Full Name'}
              onChange={handleInputChange} 
            />
          </div>
          <p className={styles.error}>{errors.name?.message}</p>

          <div className={styles.address}>
            <label className={styles.label}>Phone number</label>
            <InputBox
              name='phone'
              control={control}
              required
              type='text'
              placeholder={'Enter Your Phone Number'}
              onChange={handleInputChange}
            />
          </div>
          <p className={styles.error}>{errors.phone?.message}</p>

          <div className={styles.address}>
            <label className={styles.label}>Email Address</label>
            <InputBox
              name='email'
              control={control}
              required
              type='text'
              placeholder={'Enter Your Email Address'}
              onChange={handleInputChange} 
            />
          </div>
          <p className={styles.error}>{errors.email?.message}</p>

          <div className={styles.address}>
            <label className={styles.label}>Password</label>

            <div className={styles.showhide}>
              <InputBox
                name='password'
                control={control}
                required
                type={showPassword1 ? 'text' : 'password'}
                placeholder={'Enter Your Password'}
                onChange={handleInputChange} />
              <span className={styles.hideimg} onClick={() => setShowPassword1(!showPassword1)}>
                {showPassword1 ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <p className={styles.error}>{errors.password?.message}</p>
          </div>

          <div className={styles.address}>
            <label className={styles.label}>Confirm Password</label>

            <div className={styles.showhide}>
              <InputBox
                name='confirmPassword'
                control={control}
                required
                type={showPassword2 ? 'text' : 'password'}
                placeholder={'Confirm Your Password'}
                onChange={handleInputChange} 
              />
              <span className={styles.hideimg} onClick={() => setShowPassword2(!showPassword2)}>
                {showPassword2 ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <p className={styles.error}>{errors.confirmPassword?.message}</p>
          </div>
        </div>

        <div className={styles.btndiv}>
          {loader === false ? (
            <Button btntext={'Register'} handleClick={log} />
          ) : (
            <Button btntext={<ClipLoader size={16} color={'white'} />} handleClick={log} />
          )}
        </div>
      </form>

      <div className={styles.toggleform}>
        I have an account.
        <span className={styles.togglespan} onClick={() => navigate('/')}>
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;





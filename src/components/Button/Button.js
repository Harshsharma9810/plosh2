import React from 'react'
import styles from "./Button.module.scss"
const Button = (props) => {
  
  return (
      <button className={`${styles.button} ${styles[props?.styleType]}`} 
      onClick={()=>props?.handleClick()}>
             {props.img && <img className={styles.img} src={props.img}/>}
              {props.btntext}</button>
  )
}


export default Button
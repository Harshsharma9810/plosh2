import React from 'react'
import styles from "./Button.module.scss"

const Button = (props) => {
  return (
      <button className={`${styles.button} ${styles[props?.styleType]}`} 
      onClick={()=>props?.handleClick()}>{props.btntext}</button>
  )
}

export default Button
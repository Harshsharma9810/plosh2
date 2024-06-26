import React from 'react'
import styles from "./Button.module.scss"
const Button = (props) => {
  
  return (
      <button className={`${styles.button} ${styles[props?.styleType]}`} 
      onClick={()=>props?.handleClick()}>
        <div className={styles.btndiv}>
          <span>

             {props.img && <img className={styles.img} src={props.img} alt="img"/>}
          </span>
          <span>

              {props.btntext}
          </span>
        </div>
              </button>
  )
}


export default Button
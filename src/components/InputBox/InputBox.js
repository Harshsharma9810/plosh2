// import React from 'react'
// import styles from './InputBox.module.scss'
// import { Controller } from "react-hook-form";

// const InputBox = ({control,placeholder,name,type,handlekey}) => {
  
//   return (
//    <div className={styles.inputbox}>
//     <Controller
//         name={name} 
//         control = {control}
//         defaultValue=""
//         render={({ field }) => <input {...field} className={styles.field} placeholder={placeholder} type={type} 
//         onKeyDown={handlekey}
//         />
//   }
//     />
//    </div>
//   )
// }

// export default InputBox

import React from 'react'
import styles from './InputBox.module.scss'
import { Controller } from "react-hook-form";

const InputBox = ({ control, placeholder, name, type, handleKey, handleChange }) => {
 
  return (
    
    <div className={styles.inputbox}>
      <Controller
        name={name} 
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            className={styles.field}
            placeholder={placeholder}
            type={type} 
            onKeyDown={handleKey}
            onChange={(e) => {field.onChange(e.target.value.trim().replace(/\s+/g, ''));}}
          />
          
        )}
      />
    </div>
  )
}

export default InputBox;




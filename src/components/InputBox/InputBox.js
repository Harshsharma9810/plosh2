// // import React from 'react'
// // import styles from './InputBox.module.scss'
// // import { Controller } from "react-hook-form";

// // const InputBox = ({control,placeholder,name,type,handlekey}) => {
  
// //   return (
// //    <div className={styles.inputbox}>
// //     <Controller
// //         name={name} 
// //         control = {control}
// //         defaultValue=""
// //         render={({ field }) => <input {...field} className={styles.field} placeholder={placeholder} type={type} 
// //         onKeyDown={handlekey}
// //         />
// //   }
// //     />
// //    </div>
// //   )
// // }

// // export default InputBox

// import React from 'react'
// import styles from './InputBox.module.scss'
// import { Controller } from "react-hook-form";

// const InputBox = ({ control, placeholder, name, type, handleKey, handleChange,defaultValue,readOnly }) => {
 
//   return (
    
//     <div className={styles.inputbox}>
//       <Controller
//         name={name} 
//         control={control}
//         defaultValue={defaultValue}
//         render={({ field }) => (
//           <input
//             {...field}
//             className={styles.field}
//             placeholder={placeholder}
//             type={type} 
//             onKeyDown={handleKey}
//             onChange={(e) => {field.onChange(e.target.value.trim().replace(/\s+/g, ''));}}
//             readOnly={readOnly}
//           />
          
//         )}
//       />
//     </div>
//   )
// }

// export default InputBox;


import React from 'react';
import styles from './InputBox.module.scss';
import { Controller } from 'react-hook-form';

const InputBox = ({ control, placeholder, name, type, handleKey, defaultValue, readOnly, onChange,pattern }) => {
  return (
    <div className={styles.inputbox}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            {...field}
            className={styles.field}
            placeholder={placeholder}
            type={type}
            onKeyDown={handleKey}
            onChange={(e) => {
              field.onChange(e.target.value.trim().replace(/\s+/g, ''));
              if (onChange) onChange(e); // Call the onChange prop if provided
            }}
            readOnly={readOnly}
          />
        )}
      />
    </div>
  );
};

export default InputBox;





// import React, { useState } from 'react';
// import styles from './Slider.module.scss'; 

// const Slider = () => {
//   const [value, setValue] = useState(5); 

//   const handleChange = (event) => {
//     setValue(parseInt(event.target.value)); 
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       <input
//         type="range"
//         min="1"
//         max="10"
//         value={value}
//         onChange={handleChange}
//         className={styles.slider}
//            />
//       <div className={styles.track} style={{ width: `${(value / 10) * 100}%` }}></div>
//       <div className={styles.value}>{value}</div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState } from 'react';
import styles from './Slider.module.scss';

const Slider = () => {
  const [value, setValue] = useState(7);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const progressWidth = `${(value-1) * 10+1}%`;

  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        className={styles.slider}
        onChange={handleChange}
      />
      <div className={styles.progress} style={{ width: progressWidth }}></div>
      <div>{value}</div>
    </div>
  );
};

export default Slider;



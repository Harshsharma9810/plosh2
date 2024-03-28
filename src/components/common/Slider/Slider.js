import React, { useState } from 'react';
import styles from './Slider.module.scss';

const Slider = () => {
  const [progress, setProgress] = useState(80);

  const clickHandler = () => {
    setProgress(progress < 100 ? progress + 10 : 100);
  };
  const clickHandler1 = () => {
    setProgress(progress > 0 ? progress - 10 : 0);
  };

  const progressStyle = {
    width: `${progress}%`
  };

  return (
    <div className={styles.slider}>
      <div className={styles.shell}>
        <div className={styles.bar} style={progressStyle}></div>
      </div>

      <button onClick={clickHandler}>+</button>
      <button onClick={clickHandler1}>-</button>
      <span>{progress/10}</span>
    </div>
  );
};

export default Slider;

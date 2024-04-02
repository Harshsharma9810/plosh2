import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./BackButton.module.scss"


const BackButton = ({ setListActive1, listactive1 }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <button onClick={handleGoBack} className={styles.back}>Go Back</button>
  );
};

export default BackButton;

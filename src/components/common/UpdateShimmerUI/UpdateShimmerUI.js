import React from 'react'
import styles from "./UpdateShimmerUI.module.scss"
import ClipLoader from 'react-spinners/ClipLoader'

const UpdateShimmerUI = () => {
  return (
    <div className={styles.shimmer}>
        <div className={styles.b1}>
            {/* Loading Profile Details.... */}
        </div>
        <div className={styles.b2}> 
            <ClipLoader/>
        </div>
    </div>
  )
}

export default UpdateShimmerUI
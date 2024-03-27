import React from 'react';
import styles from "./CategoryShimmerUI.module.scss";

const CategoryShimmerUI = () => {
    return (
        <div className={styles.topdiv}>
            Loading......
        <div className={styles.shimmercontainer}>
            {[...Array(9)].map((_, index) => (
                <div key={index} className={styles.shimmercard}>
                    <div className={styles.bottom}></div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default CategoryShimmerUI;

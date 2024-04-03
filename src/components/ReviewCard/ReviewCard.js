import React from 'react'
import styles from "./ReviewCard.module.scss"
import reviewimage from "../Images/reviewimage.png"
const ReviewCard = (reviewData) => {
    const data = reviewData.reviewData;
    console.log(data,"from reviewcard")
    const profileimage = `${process.env.REACT_APP_API_URL}${data.user.avatar}`
  return (
    <div className={styles.reviewcard}>
        <div className={styles.namediv}>    
            <div className={styles.imagecontainer}>
                <img src={data.user.avatar!== null? profileimage : reviewimage} alt='img' className={styles.image}/>
            </div>
            <div className={styles.info}>
                <span className={styles.name}>{data.user.name.charAt(0).toUpperCase() + data.user.name.slice(1)}</span>
                <span className={styles.address}>{data.user.email}</span>
            </div>
        </div>
        <div className={styles.descriptiondiv}>
            <span className={styles.description}>{data.message.charAt(0).toUpperCase() + data.message.slice(1)}</span>
        </div>
        <div className={styles.filterbox2}>
                    <div className={styles.info}>
                        <div className={styles.auth}>
                            <div className={styles.head}>Authenticity</div>
                            <div className={styles.barnum}>
                                <div className={styles.bar}>
                                    <div className={styles.barspan} style={{ width: `${(data.authenticity/10) * 100}%` }}></div>
                                </div>
                                <div className={styles.num}>{data.authenticity}</div>
                            </div>
                        </div>
                        <div className={styles.auth}>
                            <div className={styles.head}>Taste</div>
                            <div className={styles.barnum}>
                                <div className={styles.bar}>
                                    <div className={styles.barspan} style={{ width: `${(data.taste/10) * 100}%` }}></div>
                                </div>
                                <div className={styles.num}>{data.taste}</div>
                            </div>
                        </div>
                       
                
            </div>
                  </div>
    </div>
  )
}

export default ReviewCard
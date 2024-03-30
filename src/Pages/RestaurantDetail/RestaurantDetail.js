import React from 'react'
import styles from "./RestaurantDetail.module.scss"
import { useLocation } from 'react-router-dom';
import restbigimg from "../../components/Images/restbigimg.jpg"
import locationimg from "../../components/Images/locationimg.png"

const RestaurantDetail = () => {
  const location = useLocation();
  const { restaurant } = location.state || {};

  // now i can acess anything by {restaurant.name}


  return (
    <>
      {restaurant && 
      <div className={styles.detail}>

        {/* PHOTO TOPBOX */}

        <div className={styles.photobox}>
          <div className={styles.imgdiv}>
            <img src={restbigimg} alt='img' className={styles.image}/>
          </div>
          <div className={styles.textdiv}>
            <div className={styles.upperbox}>
              <h1>Liz Modern Asian Restaurant</h1>
              <div className={styles.address}>
                <img src={locationimg} alt='location' className={styles.locationimg}/>
                <div className={styles.location}>86 2nd St, San Francisco, CA 94105</div>
              </div>
            </div>


            <div className={styles.lowerbox}></div>
          </div>
        </div>









        {/* ABOUT BOX */}

        <div className={styles.aboutbox}></div>
      </div>
      }
    </>
  )
}

export default RestaurantDetail
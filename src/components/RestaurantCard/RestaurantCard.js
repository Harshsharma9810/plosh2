import React from 'react'
import styles from "./RestaurantCard.module.scss"
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import icecream from "../Images/icecream.png"
import { useNavigate } from 'react-router-dom'


const RestaurantCard = ({resData,images,images1}) => {
    // const {resData} = props;
    // console.log(resData)
    // console.log(resData?.restaurantImages?.[0],"IM 0");
    // console.log(resData?.restaurantImages?.[1],"IM 1");
    // let imageUrl = `${process.env.REACT_APP_API_URL}${images}`;

    // const imageUrl1 = `${process.env.REACT_APP_API_URL}${images1}`
    
    
    // console.log(imageUrl)


    const AuthenticityPercentage = (resData.authenticity/ 10) * 100;
    const ratingPercentage = (resData.rating / 10) * 100;
    const navigate = useNavigate()
    const navigatefunc=()=>{
        navigate("/restaurantdetail", { state: { restaurant: resData} });
    }

  return (
    
    <div className={styles.card} onClick={navigatefunc}>
         <div className={styles.restaurantcard}>
            <h1 className={styles.restname}>{resData.name}</h1>
            <div className={styles.imgdiv}>
                {/* <div>
                <img src={imageUrl} className={styles.img1} alt='img1'/>
                </div> */}

                <img src={img1} className={styles.img1} alt='img1'/> 
                {/* <div> */}
                <img src={img2} className={styles.img1} alt='img2'/>
                {/* </div> */}
                {/* <img src={img2} className={styles.img1} alt='img2'/>  working fine hardcodeimg2*/}
                {/* <div> */}

                <img src={icecream} className={styles.img2} alt='img1'/>
                {/* </div> */}

                {/* <div className={styles.viewmore}>
                    <div className={styles.viewmoretext}>View more</div>
                    <img src={img1} className={styles.img3} alt='img1'/>
                </div> */}
              

            </div>
            <div className={styles.info}>
                <div className={styles.auth}>
                    <div className={styles.head}>Authenticity</div>
                    <div className={styles.barnum}>

                        <div className={styles.bar}>
                        <div className={styles.barspan} style={{maxWidth:"100%", width: `${AuthenticityPercentage}%` }}></div>
                        </div>
                        <div className={styles.num}>{resData.authenticity}</div>
                        {/* <div className={styles.num}>{resData.authenticity >10 ? 10 : resData.authenticity}</div> */}
                    </div>
                </div>
                <div className={styles.auth}>
                    <div className={styles.head}>Taste</div>
                    <div className={styles.barnum}>
                        <div className={styles.bar}>
                            <div className={styles.barspan} style={{maxWidth:"100%", width: `${ratingPercentage}%` }}></div>
                        </div>
                        <div className={styles.num}>{resData.rating}</div>
                    </div>
                </div>
                
            </div> 
        </div>
    </div>
  )
}

export default RestaurantCard
// import React from 'react'
// import styles from "./RestaurantDetail.module.scss"
// import { useLocation } from 'react-router-dom';
// import restbigimg from "../../components/Images/restbigimg.jpg"
// import locationimg from "../../components/Images/locationimg.png"
// import star from "../../components/Images/star.png"
// import fav from "../../components/Images/fav.png"
// import photo from "../../components/Images/photo.png"

// const RestaurantDetail = () => {
//   const location = useLocation();
//   const { restaurant } = location.state || {};

//   // now i can acess anything by {restaurant.name}


//   return (
//     <>
//       {restaurant && 
//       <div className={styles.detail}>

//         {/* PHOTO TOPBOX */}

//         <div className={styles.photobox}>
//           <div className={styles.imgdiv}>
//             <img src={restbigimg} alt='img' className={styles.image}/>
//           </div>
//           <div className={styles.textdiv}>
//             <div className={styles.innertextdiv}>

//               <div className={styles.upperbox}>
//                 {/* <h1>{restaurant.name}</h1> */}
//                 <p className={styles.heading}>Liz Modern Asian Restaurant</p>
//                 <div className={styles.address}>
//                   <img src={locationimg} alt='location' className={styles.locationimg}/>
//                   {/* <div className={styles.location}>{restaurant.address}</div> */}
//                   <div className={styles.location}>86 2nd St, San Francisco, CA 94105</div>
//                 </div>
//               </div>


//               <div className={styles.lowerbox}>
//                 <div className={styles.box1}>
//                   <div className={styles.reviewbox}>
//                     <img src={star} alt='star' className={styles.star}/>
//                     <p className={styles.rating}>4.5</p>
//                   </div>
//                   <div className={styles.reviewnumber}>351 Reviews</div>
//                 </div>

//                 <span className={styles.line}></span>


//                 <div className={styles.box2}>
//                   <img src={fav} alt='fav' className={styles.fav}/>
//                   <div className={styles.Favourite}>Favourite</div>
//                 </div>

//                 <span className={styles.line}></span>

//                 <div className={styles.box3}>
//                   <div className={styles.imgbox}>
//                     <img src={photo} alt='photos' className={styles.img}/>
//                     <span className={styles.number}>15</span>
//                   </div>
//                   <div className={styles.photo}>Photos</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>









//         {/* ABOUT BOX */}

//         <div className={styles.aboutbox}></div>
//       </div>
//       }
//     </>
//   )
// }

// export default RestaurantDetail

import React from 'react';
import styles from "./RestaurantDetail.module.scss";
import { useLocation } from 'react-router-dom';
import restbigimg from "../../components/Images/restbigimg.jpg"
import locationimg from "../../components/Images/locationimg.png"
import star from "../../components/Images/star.png"
import fav from "../../components/Images/fav.png"
import photo from "../../components/Images/photo.png"
import BackButton from '../../components/common/BackButton/BackButton';

const RestaurantDetail = () => {
  const location = useLocation();
  const { restaurant } = location.state || {};

  return (
    <>
      {restaurant && 
        <div className={styles.detail}>
          {/* PHOTO TOPBOX */}
          <div className={styles.photobox}>
            <div className={styles.imgdiv}>
              <img src={restbigimg} alt='img' className={styles.image}/>
              <div className={styles.overlay}></div> 
            </div>
            <div className={styles.textdiv}>
              <div className={styles.innertextdiv}>
                <div className={styles.upperbox}>
                  {/* <p className={styles.heading}>Liz Modern Asian Restaurant</p> */}
                  <p className={styles.heading}>{restaurant.name}</p>
                  <div className={styles.address}>
                    <img src={locationimg} alt='location' className={styles.locationimg}/>
                    {/* <div className={styles.location}>86 2nd St, San Francisco, CA 94105</div> */}
                    <div className={styles.location}>{restaurant.address}</div>
                  </div>
                </div>
                <div className={styles.lowerbox}>
                  <div className={styles.box1}>
                    <div className={styles.reviewbox}>
                      <img src={star} alt='star' className={styles.star}/>
                      <p className={styles.rating}>{restaurant.rating}</p>
                    </div>
                    <div className={styles.reviewnumber}>{restaurant.numberOfReviews} Reviews</div>
                  </div>
                  <span className={styles.line}></span>
                  <div className={styles.box2}>
                    <img src={fav} alt='fav' className={styles.fav}/>
                    <div className={styles.Favourite}>Favourite</div>
                  </div>
                  <span className={styles.line}></span>
                  <div className={styles.box3}>
                    <div className={styles.imgbox}>
                      <img src={photo} alt='photos' className={styles.img}/>
                      <span className={styles.number}>{restaurant.restaurantImages.length}</span>
                    </div>
                    <div className={styles.photo}>Photos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT BOX */}
          <div className={styles.aboutbox}></div>
        </div>
      }
    </>
  )
}

export default RestaurantDetail;

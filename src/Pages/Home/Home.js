import React, { useEffect, useState } from 'react'
import styles from "./Home.module.scss"
import Button from "../../components/Button/Button"
import filter from "../../components/Images/filter.png"
import search from "../../components/Images/search.png"
import cancel from "../../components/Images/cancel.png"
import SimpleMap from '../../components/common/SimpleMap'
import { API } from '../../API/APIS';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'



const Home = ({isLogin,setIsLogin,text}) => {
  console.log(isLogin,"3")
  const [showRestaurantData,setShowRestaurantData] = useState([])
  const [showCuisineData,setShowCuisineData]=useState([])
  

  const [listactive,setListActive] =useState(true)
  const [listactive1,setListActive1] =useState(false)
  const [showFilterMenu,setShowFilterMenu] = useState(false)
  const cuisines = ['French', 'Indian','Chinese', 'Italian','Thai','Japanese','Mexican','Lebanese', 'Caribbean','Korean'];

  const handlelist=()=>{
    setListActive(!listactive)
    setListActive1(!listactive1)
  }

  const handlelist1 = async () => {
    setListActive1(!listactive1);
    setListActive(!listactive);
    
    const data = {
      token: localStorage.getItem("token"), 
    };
    await getRestaurantList(data);
  };
  
    
  const getRestaurantList = async (data) => {
    try {
      const response = await API.restaurantList(data);
      // console.log(response)
      setShowRestaurantData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  const filterMenuFunc=()=>{
    setShowFilterMenu(!showFilterMenu)
    const token = localStorage.getItem("token");
    const fetchData = async () => {
        try {
            const response = await API.cuisineList(token);
            console.log(response);
            setShowCuisineData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
  }

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const fetchData = async () => {
//         try {
//             const response = await API.cuisineList(token);
//             console.log(response);
//             setShowCuisineData(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     fetchData();
// },[showFilterMenu])
  return (
    <>
    
    
    <div className={styles.home}>

      {/* BOX1 TRENDING */}
      <div className={styles.box1}>
        <div className={styles.text1}>
          <h1 className={styles.trending}>Trending near you</h1>
        </div>
          <div className={styles.btnbox}>
            <button
            className={listactive ? `${styles.btn1} ${styles.active}` : styles.btn1}
            onClick={handlelist}
          >Map</button>
            <button style={{borderRadius:"0px 5px 5px 0px"}}
            className={listactive1 ? `${styles.btn1} ${styles.active}` : styles.btn1}
            onClick={handlelist1}
          >List</button>
          </div>
      </div>


      {/* BOX2 SEARCH */}
      <div className={styles.box2}>
        <div className={styles.searchbox}>
          <div className={styles.inputbox}>
            <div className={styles.inputicon}>
                <img src={search} alt="search" className={styles.searchicon}/>
                <input className={styles.input} type="text" placeholder="Nearby Restaurants"/>
            </div>
            <Button styleType={"button1"} btntext={"Search"}/>
          </div>

          <div className={styles.filter} onClick={filterMenuFunc}>
          {/* <div className={styles.filter} onClick={()=>{setShowFilterMenu(!showFilterMenu)}}> */}
            <img src={filter} alt="filter" className={styles.filterimg} />
          </div>


          {/* FILTER MENU */}
            {
              setShowFilterMenu && ( <div className={`${styles.menu} ${showFilterMenu && styles.open}`} >
              <div className={styles.boxleft} >

                  {/* FILTER BOX1 */}
                  <div className={styles.filterbox1}>
                    <div className={styles.heading}>Filters</div>
                    <div className={styles.close} onClick={()=>setShowFilterMenu(!showFilterMenu)} >
                        <img src={cancel} className={styles.close} alt='close' />
                    </div> 
                  </div>

                  {/* FILTER BOX2 */}
                  <div className={styles.filterbox2}>
                    <h2 className={styles.sort}>Sort by rating</h2>
                    <div className={styles.info}>
                        <div className={styles.auth}>
                            <div className={styles.head}>Authenticity</div>
                            <div className={styles.barnum}>

                                <div className={styles.bar}>
                                <div className={styles.barspan} style={{ width: `80%` }}></div>
                                {/* <div className={styles.barspan} style={{ width: `${AuthenticityPercentage}%` }}></div> */}
                                </div>
                                <div className={styles.num}>08</div>
                            </div>
                        </div>
                        <div className={styles.auth}>
                            <div className={styles.head}>Taste</div>
                            <div className={styles.barnum}>
                                <div className={styles.bar}>
                                    <div className={styles.barspan} style={{  width: `90%` }}></div>
                                </div>
                                <div className={styles.num}>09</div>
                            </div>
                        </div>
                
            </div>
                  </div>

                  {/* FILTER BOX3 */}
                  <div className={styles.filterbox3}>
                    <h2 className={styles.cuisines}>Sort by cuisines</h2>
                    <div className={styles.checkbox}>
                      {showCuisineData.map((cuisine, index) => (
                        <div key={index} className={styles.inputs}>
                          <input value="test" type="checkbox" id={`cuisine${index}`} className={styles.squarebox}/>
                          <label htmlFor={`cuisine${index}`} className={styles.cuisine}>{cuisine.name}</label>
                          {/* {console.log(cuisine._id)} */}
                        </div>
                      ))}
                  </div>
                  </div>

                  {/* FILTER BOX4 */}
                  <div className={styles.filterbox4}>
                    <Button styleType={"button2"} btntext={"Clear all"}/>
                    <Button styleType={"button3"} btntext={"Apply"}/>
                  </div>
              </div>
          </div>)
            }
        </div>
      
      </div>

            {/* BOX3 MAP AND LIST */}
      {listactive &&
      <div className={styles.box3}>
        <div><SimpleMap/></div>
      </div>}
      
{listactive1 &&
    <div>
        {showRestaurantData.length === 0 ? (
            <div>Getting restaurants List...</div>
        ) : (
            showRestaurantData.map((restaurant, index) => (
                <RestaurantCard
                    key={index}
                      images= {restaurant?.restaurantImages?.[0]?.name}
                   resData={restaurant}

                />
            //     <RestaurantCard
            //     key={index}
            //     resData={restaurant}
            // />
            ))
        )}
    </div>
}
    </div>
    </>
  )
}

export default Home
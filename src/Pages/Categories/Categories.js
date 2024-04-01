import React, { useEffect, useState } from 'react'
import styles from "./Categories.module.scss"
import french from "../../components/Images/french.png"
import indian from "../../components/Images/indian.png"
import chinese from "../../components/Images/chinese.png"
import italian from "../../components/Images/italian.png"
import mexican from "../../components/Images/mexican.png"
import lebanese from "../../components/Images/lebanese.png"
import Caribean from "../../components/Images/caribean.png"
import korean from "../../components/Images/korean.png"
import { API } from '../../API/APIS';
import CategoryShimmerUI from '../../components/common/CategoryShimmerUI/CategoryShimmerUI'
import ClipLoader from "../../components/common/Spinner"



const Categories = () => {
    const [categoryData,setCategoryData] = useState([])
    const [loader,setLoader] = useState(false)
    


    const imagearray = [
        {imgSrc: french },
        {imgSrc: indian },
        {imgSrc: chinese },
        {imgSrc: italian },
        {imgSrc: mexican },
        {imgSrc: lebanese },
        {imgSrc: Caribean },
        {imgSrc: korean },
        {imgSrc: chinese }
    ];

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                setLoader(true)
                const response = await API.categoryList(token);
                // console.log(response);
                setCategoryData(response.data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoader(false)
            }
        };
        fetchData();
    }, [])
    
    
  return (
    <div className={styles.categoriespage}>
        {
loader===true ? <div className={styles.loader} >
            <ClipLoader size={30}/>
         </div>
         :
        
        <div className={styles.topdiv}>
            <h1 className={styles.heading}>Categories</h1>
            <div className={styles.categoriesdiv}>
                {categoryData.map((category, index) => {
                    const imageIndex = index % imagearray.length;
                    
                    return (
                        <div key={index} className={styles.category}>
                            <div className={styles.imgbox}>
                                <img src={imagearray[imageIndex].imgSrc} alt={category.name} className={styles.img}/>
                                <div className={styles.view}>View</div>
                            </div>
                            <div className={styles.categoryname}>{category.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
        }
    </div>
  )
}

export default Categories

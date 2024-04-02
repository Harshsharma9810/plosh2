import React from 'react'
import styles from "./MenuComponent.module.scss"

const MenuComponent = (props) => {
        const menuItems = [
          { name: `${props.text} 1`, price: '259/-'} ,
          { name: `${props.text} 2`, price: '299/-'} ,
          { name: `${props.text} 3`, price: '399/-'} ,
          { name: `${props.text} 4`, price: '499/-'} ,
          { name: `${props.text} 5`, price: '599/-'} ,
         
        ];
  return (
    <div className={styles.menu}>
            <div className={styles.imgdiv}>
                <img src={props.menuimage} alt='menu' className={styles.image} />
            </div>
            <div className={styles.menuitems}>
                <span className={styles.heading}>{props.heading}</span>
                {menuItems.map((item, index) => (
                    <div key={index} className={styles.eachmenuitem}>
                      <div className={styles.rest}>
                        <span className={styles.apetizers}>{item.name}</span>
                        <span className={styles.line}></span>
                      </div>
                        <span className={styles.price}>{item.price}</span>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default MenuComponent
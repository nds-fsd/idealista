import React from "react";
import styles from "../dropDownNav/dropDownNav.module.css"


const DropDownNav = ({img,text,onClick}) =>{

    return(
        <>
        <div className={styles.listanav}>
            <li onClick={onClick}className={styles.item}>
            <img src={img}/>
            <p>{text}</p>
            </li>
        </div>
            
        </>
    )
}

export default DropDownNav
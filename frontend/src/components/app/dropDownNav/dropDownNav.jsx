import React from "react";
import styles from "../dropDownNav/dropDownNav.module.css"


const DropDownNav = ({img,text,onClick}) =>{

    return(
        <>
        <div className={styles.listanav}>
            <li onClick={onClick}className={styles.item}>
            <img src={img}/>
            <a>{text}</a>
            </li>
        </div>
            
        </>
    )
}

export default DropDownNav
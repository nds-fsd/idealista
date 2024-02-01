import React from "react";
import styles from "../dropDownNav/dropDownNav.module.css"


const DropDownNav = ({img,text,onClick}) =>{

    return(
        <>
            <li onClick={onClick}className={styles.item}>
            <img src={img}/>
            <a>{text}</a>
            </li>
        </>
    )
}

export default DropDownNav
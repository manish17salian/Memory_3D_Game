"use client";
import { useEffect, useState } from "react";
import styles from "../style.module.css";

const Card = ({index, item, onClick, isClicked, reset, disableCards})=>{
  useEffect(()=>{
  },[isClicked])
    return(
        <div
        className={`${styles.card} ${isClicked.indexOf(index) !== -1 || disableCards.indexOf(index) !== -1 ? styles.flipped:''}`}
        onClick={onClick}
      >
        <div 
        className={`${styles.backSide}`}
        ></div>
        {item !== undefined && (
        <img
          alt={`cat-${item}`}
          src={`https://robohash.org/${item.toString()}?set=set4&&size=120x120`}
        />
      )}
      </div>
    )
}

export default Card
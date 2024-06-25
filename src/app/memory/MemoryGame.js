"use client"
import React, { useEffect, useRef, useState } from "react";
import shuffle from "../model/_shuffle";
import Card from "../card/card";
import styles from "../style.module.css";

const items = [0, 1, 2, 3, 4];
export default function MemoryGame() {
  const [allItems, setAllItems] = useState([])
  const [remainingCards, setRemainingCards] = useState([])
  const [firstClick, setFirstClick] = useState(false)
  const [clickedItem, setClickedItem] = useState([])
  const [disableCards, setDisableCards] = useState([])

  let timer = useRef(null)

  useEffect(() => {
    setRemainingCards([...items])
    setAllItems(shuffle([...items, ...items]))
    return (() => clearTimeout(timer))
  }, [])

  useEffect(() => {

  }, [clickedItem])


  const handleCardClick = (index) => {

    if (firstClick) {
      let update = [...clickedItem]
      update[1] = index
      setClickedItem(update)
      if (allItems[clickedItem[0]] === allItems[index]) {
        setFirstClick(false)
        let disable = [...disableCards]
        disable.push(index)
        disable.push(clickedItem[0])
        setDisableCards(disable)

        let updateRem = remainingCards
        updateRem.splice(updateRem.indexOf(allItems[index]), 1)
        setRemainingCards(updateRem)
      } else {
        timer.current = setTimeout(() => {
          setFirstClick(false)
          setClickedItem([allItems.length, allItems.length])
        }, 1000)
      }
    } else {
      setFirstClick(true)
      let update = [...clickedItem]
      update[0] = index
      setClickedItem(update)
    }

  }

  return (
    <>
      {/* Display remaining cards or victory message */}
      {remainingCards && (remainingCards.length > 0 ? `Remaining cards: ` : "Victory!")}
      <div className={`${styles.remainingCards}`}>
        {remainingCards.map((card, index) =>

          <img
            key={index}
            alt={`cat ${index}`}
            src={`https://robohash.org/${card}?set=set4&&size=80x80`}
          />
        )}
      </div>



      {/* Display all cards for the memory game */}
      <div
        className={`${styles.cardsContainer}`}
      >
        {allItems.map((item, index) =>

          <Card key={`${index}-${item}`} index={index}
            item={item}
            onClick={() => handleCardClick(index)}
            isClicked={clickedItem}
            disableCards={disableCards}
          />

        )}
      </div>
    </>
  );
}

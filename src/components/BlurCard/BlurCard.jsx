import React from 'react'
import BBGoT from '../../Image/BBG.jpg';
import styles from './blurCard.module.scss';

function BlurCard() {
  return (
    <div className= { styles.main}>
      <div className={styles.image}> 
        <div className={styles.blurCard}>
          <p className={styles.title}>New Game</p>
          <p className={styles.title}>Coming soon</p>
          <button className={styles.button}>Check</button>  
        </div>
      </div>
    </div>
  )
}

export default BlurCard

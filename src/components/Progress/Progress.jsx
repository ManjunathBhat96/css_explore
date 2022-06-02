import React, {useCallback, useState, useEffect} from 'react'
import styles from './progress.module.scss';

function Progress() {
  const [percentage, setPercentage] = useState(0);
  // useEffect(()=>{
  //   if(percentage<=100){
  //     setTimeout(()=>{
  //       setPercentage(percentage+1);
  //     },100)
  //   }else {
  //     setPercentage(0);
  //   }
  // },[percentage])

  return (
    <div class={styles.circle_wrap}>
  <div class={styles.circle}>
  <div class={styles.inside_circle}> 75% </div>
  <div class={`${styles.mask} ${styles.half}`}>
    <div class={styles.fill}></div>
  
</div>
  </div>
</div>
  )
}

export default Progress

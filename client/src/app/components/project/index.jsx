import React from 'react'
import styles from '../project/style.module.css';

export default function index({index, title, setModal}) {
  return (
    <div className={styles.project} 
      onMouseEnter={() => {setModal({active: true, index: index})}} 
      onMouseLeave={() => {setModal({active: false, index: index})}}>
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  )
}
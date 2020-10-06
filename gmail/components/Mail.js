import React from 'react';
import styles from '../styles/Home.module.css'

const Mail = (props) => {
  return (
    <aside className={styles.mails}>
        <ul>
            {props.list.map((item) =>
            <li key={item.id}>
                <div className={styles.left}>
                    <span className={styles.checkbox}></span>
                    <span className={styles.avatar}><img src={item.photo} alt={item.alt} width="38" height="38" /></span>
                </div>

                <div className={styles.right}>
                    <span className={styles.name}>{item.name} <span className={styles.time}>{item.time}</span></span>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.preview}>{item.preview}</span>
                </div>
            </li>
            )}
        </ul>
    </aside>
  );
}

export default Mail;
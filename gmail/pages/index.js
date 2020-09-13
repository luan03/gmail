import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Gmail</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet"></link>
      </Head>

      <header className={styles.header}>Search</header>

      <main className={styles.main}>
        <nav className={styles.navigation}>navigation menu</nav>

        <aside className={styles.mails}>
          <ul>
            <li>
              <div className={styles.left}>
                <span className={styles.checkbox}></span>
                <span className={styles.avatar}><img src="uncle-bob.png" alt="Robert C. Martin" width="38" height="38" /></span>
              </div>

              <div className={styles.right}>
                <span className={styles.name}>Uncle Bob <span className={styles.time}>15 mins</span></span>
                <span className={styles.title}>Brazil.JS Conference 2020</span>
                <span className={styles.preview}>Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon...</span>
              </div>
            </li>
            <li>
              <div className={styles.left}>
                <span className={styles.checkbox}></span>
                <span className={styles.avatar}><img src="uncle-bob.png" alt="Robert C. Martin" width="38" height="38" /></span>
              </div>

              <div className={styles.right}>
                <span className={styles.name}>Uncle Bob <span className={styles.time}>15 mins</span></span>
                <span className={styles.title}>Brazil.JS Conference 2020</span>
                <span className={styles.preview}>Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon...</span>
              </div>
            </li>
            <li>
              <div className={styles.left}>
                <span className={styles.checkbox}></span>
                <span className={styles.avatar}><img src="uncle-bob.png" alt="Robert C. Martin" width="38" height="38" /></span>
              </div>

              <div className={styles.right}>
                <span className={styles.name}>Uncle Bob <span className={styles.time}>15 mins</span></span>
                <span className={styles.title}>Brazil.JS Conference 2020</span>
                <span className={styles.preview}>Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon...</span>
              </div>
            </li>
            <li>
              <div className={styles.left}>
                <span className={styles.checkbox}></span>
                <span className={styles.avatar}><img src="uncle-bob.png" alt="Robert C. Martin" width="38" height="38" /></span>
              </div>

              <div className={styles.right}>
                <span className={styles.name}>Uncle Bob <span className={styles.time}>15 mins</span></span>
                <span className={styles.title}>Brazil.JS Conference 2020</span>
                <span className={styles.preview}>Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon...</span>
              </div>
            </li>
          </ul>
        </aside>

        <article className={styles.message}>full message mail</article>
      </main>

    </div>
  )
}

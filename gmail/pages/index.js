import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Gmail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>Search</header>

      <main className={styles.main}>
        <nav className={styles.navigation}>navigation menu</nav>
        <aside className={styles.mails}>list of mail</aside>
        <article className={styles.message}>full message mail</article>
      </main>

    </div>
  )
}
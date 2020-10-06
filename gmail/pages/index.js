import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Mail from '../components/Mail.js';

export default function Home() {

  const mails = [
      {
        id: 1,
        photo: "uncle-bob.png",
        alt: "Robert C. Martin",
        name: "Uncle Bob",
        time: "15 mins",
        title: "Brazil.JS Conference 2020",
        preview: "Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon..."
    },
    {
        id: 2,
        photo: "uncle-bob.png",
        alt: "Robert C. Martin",
        name: "Uncle Bob",
        time: "15 mins",
        title: "Brazil.JS Conference 2020",
        preview: "Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon..."
    },
    {
        id: 3,
        photo: "uncle-bob.png",
        alt: "Robert C. Martin",
        name: "Uncle Bob",
        time: "15 mins",
        title: "Brazil.JS Conference 2020",
        preview: "Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon..."
    },
    {
        id: 4,
        photo: "uncle-bob.png",
        alt: "Robert C. Martin",
        name: "Uncle Bob",
        time: "15 mins",
        title: "Brazil.JS Conference 2020",
        preview: "Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon..."
    },
    {
        id: 5,
        photo: "uncle-bob.png",
        alt: "Robert C. Martin",
        name: "Uncle Bob",
        time: "15 mins",
        title: "Brazil.JS Conference 2020",
        preview: "Hey Luan, I'm confirming my presence in Brazil.JS conference 2020 and I'm hope to meet you soon..."
    }
  ]

  return (
    <div className={styles.container}>

      <Head>
        <title>Gmail</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet"></link>
      </Head>

      <header className={styles.header}></header>

      <main className={styles.main}>
        <nav className={styles.navigation}>navigation menu</nav>

        <Mail list={mails} />

        <article className={styles.message}>full message mail</article>
      </main>

    </div>
  )
}

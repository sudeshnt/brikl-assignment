import type { NextPage } from 'next'
import Head from 'next/head'
import Swatch from '../components/Swatch/Swatch'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brikl Color Swatches</title>
      </Head>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to <a>Brikl Color Swatch!</a>
        </h2>
        <Swatch />
      </main>
    </div>
  )
}

export default Home

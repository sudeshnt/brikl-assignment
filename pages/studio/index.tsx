import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ColorChange from '../../components/ColorChange/ColorChange'
import Shapes from '../../components/Shapes/Shapes'
import ColorPicker from '../../components/ColorPicker/ColorPicker'

const Studio: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Brikl Studio</title>
      </Head>
      
      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to <a>Brikl Studio!</a>
        </h2>

        <div className={styles.grid}>
          <ColorChange />
          <Shapes />
          <ColorPicker />
        </div>
      </main>
    </div>
  )
}

export default Studio
import type { NextPage } from 'next'
import Head from 'next/head'
import ColorChange from '../../components/ColorChange/ColorChange'
import Shapes from '../../components/Shapes/Shapes'
import ColorPicker from '../../components/ColorPicker/ColorPicker'
import styles from '../../styles/Home.module.css'

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
        <ColorChange />
        <Shapes />
        <ColorPicker />
      </main>
    </div>
  )
}

export default Studio
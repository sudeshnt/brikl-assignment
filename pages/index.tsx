/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Checkbox, Select } from 'antd';
import styles from '../styles/Home.module.css'
import Swatch from '../components/Swatch/Swatch'
import { Color, ColorData, ColorTypes } from '../types/color-types'

const { Option } = Select;
const allColorTypes = Object.values(ColorTypes)

const Home: NextPage = () => {
  const [colors, setColors] = useState<Array<Color>>([])
  const [colorTypes, setColorTypes] = useState<Array<ColorTypes>>(allColorTypes)
  const [colorCount, setColorCount] = useState<number>(5)

  function fetchColors () {
    fetch(`api/colors?count=${colorCount}&colorTypes=${colorTypes.join(',')}`)
      .then((res) => res.json())
      .then((data: ColorData) => {
        setColors(data.colors)
      })
  }

  useEffect(() => {
    fetchColors()
  }, [colorCount, colorTypes])

  const onChangeCount = (value: string) => setColorCount(Number(value))

  const onChangeTypes = (value: any[]) => {
    setColorTypes(value.length ? value : allColorTypes)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Brikl Color Swatches</title>
      </Head>
      
      <main className={styles.main}>
      
        <h2 className={styles.title}>
          Welcome to <a>Brikl Color Swatch!</a>
        </h2>

        <div className={styles.questionContainer}>
          <p className={styles.subtitle}>
            Get started by inputting type & how many colors you need
          </p>

          <Checkbox.Group className={styles.types} options={allColorTypes} defaultValue={allColorTypes} value={colorTypes} onChange={onChangeTypes} />

          <Select defaultValue="5" className={styles.count} onChange={onChangeCount}>
            <Option value="5">5</Option>
            <Option value="10">10</Option>
            <Option value="25">25</Option>
            <Option value="50">50</Option>
          </Select>
        </div>
        

        <div className={styles.grid}>
          {
            colors.map((color) => (
              <Swatch key={color.id} {...color} />
            ))
          }
        </div>

        <div>
          <Button type="primary" size="large" onClick={fetchColors}>Generate</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a>
          Powered by Brikl
        </a>
      </footer>
    </div>
  )
}

export default Home

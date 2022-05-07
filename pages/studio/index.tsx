import { useState, useEffect } from 'react'
import { Button } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getColor } from '../../utils/api-utils'
import { ColorTypes, RGB } from '../../types/color-types'

const Studio: NextPage = () => {
  const [currentTextColor, setCurrentTextColor] = useState('black')
  const [selectedPath, setSelectedPath] = useState<SVGPathElement | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const changeColor = () => {
    const list: any = document.getElementById('color-change-svg-1')
    const svgDoc = list.getSVGDocument()
    const textPaths = svgDoc.querySelectorAll(`path[fill='${currentTextColor}']`)
    const randColor = getColor(ColorTypes.RGB)() as RGB
    const colorValue = `rgb(${randColor.red}, ${randColor.green}, ${randColor.blue})`
    setCurrentTextColor(colorValue)
    textPaths.forEach((path: any) => {
      path.setAttribute("fill", colorValue)
    })
  }

  const renderCanvas1 = () => {
    const canvas1 =  document.querySelector('canvas#canvas-1') as HTMLCanvasElement;
    const ctx1 = canvas1.getContext('2d')!;
    // Circle
    ctx1.setTransform(1, 0, 0, 1, 0, 0);
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.beginPath();
    ctx1.fillStyle = 'LightGray';
    ctx1.strokeStyle = 'yellow';
    ctx1.lineWidth = 6;
    ctx1.arc(30, 30, 20, 0, Math.PI * 2, true)
    ctx1.fill();
    ctx1.stroke();
    // Rotated Square
    ctx1.beginPath();
    ctx1.fillStyle = 'Ivory';
    ctx1.strokeStyle = 'black';
    ctx1.lineWidth = 2;
    ctx1.translate(0, 0);
    ctx1.rotate(30 * Math.PI / 180);
    ctx1.fillRect(100, 0, 50, 50);
    ctx1.strokeRect(100, 0, 50, 50);
    ctx1.stroke();
  }

  const renderCanvas2 = () => {
    const canvas2 =  document.querySelector('canvas#canvas-2') as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d')!;
    // Circle
    ctx2.beginPath();
    ctx2.fillStyle = 'green';
    ctx2.strokeStyle = 'yellow';
    ctx2.lineWidth = 6;
    ctx2.arc(35, 35, 30, 0, Math.PI * 2, true)
    ctx2.fill();
    ctx2.stroke();
    // Square
    ctx2.beginPath();
    ctx2.fillStyle = 'yellow';
    ctx2.strokeStyle = 'black';
    ctx2.lineWidth = 4;
    ctx2.fillRect(125, 10, 120, 120);
    ctx2.strokeRect(125, 10, 120, 120);
    ctx2.stroke();
  }

  const renderCanvas3 = () => {
    const canvas3 =  document.querySelector('canvas#canvas-3') as HTMLCanvasElement;
    const ctx3 = canvas3.getContext('2d')!;
    // Square 1
    ctx3.beginPath();
    ctx3.fillStyle = 'black';
    ctx3.fillRect(10, 10, 50, 50);
    ctx3.stroke();
    // Dot
    ctx3.arc(90, 100, 3, 0, Math.PI * 2, true)
    ctx3.fill();
    // Square
    ctx3.beginPath();
    ctx3.fillStyle = 'yellow';
    ctx3.strokeStyle = 'black';
    ctx3.lineWidth = 3;
    ctx3.fillRect(140, 30, 100, 100);
    ctx3.strokeRect(140, 30, 100, 100);
    ctx3.stroke();
  }

  const attachEventListeners = () => {
    console.log('attach event listeners')
    const list: any = document.getElementById('color-change-svg-2')
    const svgDoc = list.getSVGDocument()
    const allPaths = svgDoc.querySelectorAll(`path`) as Array<SVGPathElement>
    allPaths.forEach((path) => {
      path.addEventListener('click',  (e: any) => {
        const target = e.target
        setSelectedPath(target)
        setSelectedColor(target.getAttribute('fill').toString())
      })
    })
  }

  const colorChange = (color: string) => {
    if (selectedPath) {
      selectedPath.setAttribute('fill', color)
    }
  }

  useEffect(() => {
    window.addEventListener("load", (e) => {
      renderCanvas1()
      renderCanvas2()
      renderCanvas3()
      attachEventListeners()
    });
  }, [])

  console.log(selectedPath, selectedColor)
  return (
    <div className={styles.container}>
      <Head>
        <title>Brikl Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Brikl Studio!</a>
        </h2>

        <div className={styles.grid}>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              1. Change color of svg element by using DOM manipulation
            </p>
            <object id="color-change-svg-1" data='/brikl-logo.svg' type="image/svg+xml" />
            <Button type="primary" onClick={changeColor}>Change Color</Button>
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              2. Implement Canvas API to generate shapes
            </p>
            <canvas id="canvas-1"></canvas>
            <canvas id="canvas-2"></canvas>
            <canvas id="canvas-3"></canvas>
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              3. recolor svg file by clicking each path element
            </p>
            { selectedPath && selectedColor && <div className={styles.colorPicker}>
                <span>Select Color to set for the selected Path</span>
                <input type="color" value={selectedColor} onChange={(e) => colorChange(e.target.value)}/>
              </div>
            }
            <object id="color-change-svg-2" data='/brikl-logo.svg' type="image/svg+xml" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Studio
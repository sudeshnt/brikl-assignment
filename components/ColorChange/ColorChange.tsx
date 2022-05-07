import { useState } from "react"
import { Button } from "antd"
import { generateColor } from '../../utils/api-utils'
import { ColorTypes, RGB } from '../../types/color-types'
import styles from '../../styles/Home.module.css'

const ColorChange = () => {
  const [currentTextColor, setCurrentTextColor] = useState('black')

  const changeColor = () => {
    const list: any = document.getElementById('color-change-svg')
    const svgDoc = list.getSVGDocument()
    const textPaths = svgDoc.querySelectorAll(`path[fill='${currentTextColor}']`)
    const randColor = generateColor(ColorTypes.RGB) as RGB
    const colorValue = `rgb(${randColor.red}, ${randColor.green}, ${randColor.blue})`
    setCurrentTextColor(colorValue)
    textPaths.forEach((path: any) => {
      path.setAttribute("fill", colorValue)
    })
  }

  return (
    <div className={styles.questionContainer}>
      <p className={styles.question}>
        1. Change color of svg element by using DOM manipulation
      </p>
      <object id="color-change-svg" data='/brikl-logo.svg' type="image/svg+xml" />
      <Button type="primary" onClick={changeColor}>Change Color</Button>
    </div>
  )
}

export default ColorChange
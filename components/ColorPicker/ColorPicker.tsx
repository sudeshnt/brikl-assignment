import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

const ColorPicker = () => {
  const [selectedPath, setSelectedPath] = useState<SVGPathElement | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const attachEventListeners = () => {
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

  const colorChange = (e: any) => {
    if (selectedPath) {
      selectedPath.setAttribute('fill', e.target.value)
    }
  }

  useEffect(() => {
    const list: any = document.getElementById('color-change-svg-2')

    list.addEventListener("load", () => {
      attachEventListeners()
    })
  }, [])

  return (
    <div className={styles.questionContainer}>
      <p className={styles.question}>
        3. recolor svg file by clicking each path element
      </p>
      { selectedPath && selectedColor && <div className={styles.colorPicker}>
          <span>Select Color to set for the selected Path</span>
          <input type="color" value={selectedColor} onChange={colorChange}/>
        </div>
      }
      <object id="color-change-svg-2" data='/brikl-logo.svg' type="image/svg+xml" height="300" />
    </div>
  )
}

export default ColorPicker
/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip } from "antd"
import { useEffect, useState } from "react"
import { Checkbox, Select, Button } from 'antd';
import { Color, ColorTypes, ColorData } from "../../types/color-types"
import { SwatchItem } from "./Swatch.styled"
import styles from '../../styles/Home.module.css'

const { Option } = Select;

const allColorTypes = Object.values(ColorTypes)
const countOptions = [5, 10, 25, 50]

const Swatch = () => {
  const [colors, setColors] = useState<Array<Color>>([])
  const [colorTypes, setColorTypes] = useState<Array<ColorTypes>>(allColorTypes)
  const [colorCount, setColorCount] = useState<number>(5)

  useEffect(() => {
    fetchColors()
  }, [colorCount, colorTypes])

  const fetchColors = () => {
    fetch(`api/colors?count=${colorCount}&colorTypes=${colorTypes.join(',')}`)
      .then((res) => res.json())
      .then((data: ColorData) => {
        setColors(data.colors)
      })
  }

  const getTooltipText = (color: Color) => {
    switch(color.type) {
      case ColorTypes.HSL:
        return `HSL (${color.hue}, ${color.saturation}%, ${color.lightness}%)`
      default:
        return `${color.type} (${color.red}, ${color.green}, ${color.blue})`
    }
  }

  const onChangeCount = (value: string) => setColorCount(Number(value))

  const onChangeTypes = (value: any[]) => {
    setColorTypes(value.length ? value : allColorTypes)
  }

  return (
    <div className={styles.main}>
      <div className={styles.questionContainer}>
        <p className={styles.subtitle}>
          Get started by inputting type & how many colors you need
        </p>
        <Checkbox.Group
          className={styles.types}
          options={allColorTypes}
          defaultValue={allColorTypes}
          value={colorTypes}
          onChange={onChangeTypes}
        />
        <Select defaultValue="5" className={styles.count} onChange={onChangeCount}>
          {countOptions.map((countOption) => (
            <Option key={countOption} value={countOption}>{countOption}</Option>
          ))}
        </Select>
      </div>
      <div className={styles.grid}>
        {
          colors.map((color) => (
            <Tooltip key={color.id} title={getTooltipText(color)}>
              <SwatchItem {...color} />
            </Tooltip>
          ))
        }
      </div>
      <div>
        <Button type="primary" size="large" onClick={fetchColors}>Generate</Button>
      </div>
    </div>
  )
}

export default Swatch
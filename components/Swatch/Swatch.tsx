import { Tooltip } from "antd"
import { useMemo } from "react"
import { Color, ColorTypes } from "../../types/color-types"
import { SwatchContainer } from "./Swatch.styled"

const Swatch = (props: Color) => {
  const tooltipText = useMemo(() => {
    switch(props.type) {
      case ColorTypes.RGB:
        return `RGB (${props.red}, ${props.green}, ${props.blue})`
      case ColorTypes.HSL:
        return `HSL (${props.hue}, ${props.saturation}%, ${props.lightness}%)`
      case ColorTypes.BRGB:
        return `BRGB (${props.red}, ${props.green}, ${props.blue})`
      default:
        return null
    }
  }, [props])

  return (
    <Tooltip title={tooltipText}>
      <SwatchContainer {...props} />
    </Tooltip>
  )
}

export default Swatch
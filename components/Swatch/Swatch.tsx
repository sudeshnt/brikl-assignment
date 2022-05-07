import { Tooltip } from "antd"
import { useMemo } from "react"
import { Color, ColorTypes } from "../../types/color-types"
import { SwatchContainer } from "./Swatch.styled"

const Swatch = (props: Color) => {
  const tooltipText = useMemo(() => {
    switch(props.type) {
      case ColorTypes.HSL:
        return `HSL (${props.hue}, ${props.saturation}%, ${props.lightness}%)`
      default:
        return `${props.type} (${props.red}, ${props.green}, ${props.blue})`
    }
  }, [props])

  return (
    <Tooltip title={tooltipText}>
      <SwatchContainer {...props} />
    </Tooltip>
  )
}

export default Swatch
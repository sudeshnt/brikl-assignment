import { ColorTypes, RGB, RGBVariantColor } from "../types/color-types";
import ColorRules from "./color-rules";

const defaultRgb: Partial<RGB> = {
  red: 255,
  green: 255,
  blue: 255
}

const generateRandom = (min: number, max: number): number => {
  let diff = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * diff);
  return rand + min;
}

const convertToRgb = (color: RGBVariantColor): RGB => {
  let { type, red, green, blue } = color
  if (red && green && blue) {
    if (type !== ColorTypes.RGB) {
      const rules = ColorRules[type] ?? ColorRules[ColorTypes.RGB]
      const rgbRules = ColorRules.RGB
      return {
        ...color,
        type: ColorTypes.RGB,
        red: Math.round(red / rules.red.max * rgbRules.red.max),
        green: Math.round(green / rules.green.max * rgbRules.green.max),
        blue: Math.round(blue / rules.blue.max * rgbRules.blue.max)
      }
    }
    return {
      ...color,
      type: ColorTypes.RGB,
    }
  }
  return {
    ...color,
    type: ColorTypes.RGB,
    ...defaultRgb
  }
}

export {
  generateRandom,
  convertToRgb
}
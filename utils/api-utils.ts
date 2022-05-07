import { v4 as uuidv4 } from 'uuid';
import { RGB, ColorTypes, HSL, Color, BRGB } from '../types/color-types';
import { generateRandom } from './utils';

export const rules = {
  [ColorTypes.RGB]: {
    min: 0,
    max: 255
  },
  [ColorTypes.HSL]: {
    min: 0,
    max: 100,
    hue: {
      min: 0,
      max: 360
    }
  },
  [ColorTypes.BRGB]: {
    min: 0,
    max: 10000
  },
}

const generateRgbColor = (): RGB => {
    return <RGB> {
      id: uuidv4(),
      type: ColorTypes.RGB,
      ...['red', 'green', 'blue'].reduce((acc, curr) => ({
        ...acc,
        [curr]: generateRandom(rules[ColorTypes.RGB].min, rules[ColorTypes.RGB].max)
      }), {})
    }
}

const generateHslColor = (): HSL => {
  return <HSL> {
    id: uuidv4(),
    type: ColorTypes.HSL,
    hue: generateRandom(rules[ColorTypes.HSL].hue.min, rules[ColorTypes.HSL].hue.max),
    ...['saturation', 'lightness'].reduce((acc, curr) => ({
      ...acc,
      [curr]: generateRandom(rules[ColorTypes.HSL].min, rules[ColorTypes.HSL].max)
    }), {})
  }
}

const generateBrgbColor = (): BRGB => {
  return <BRGB> {
    id: uuidv4(),
    type: ColorTypes.BRGB,
    ...['red', 'green', 'blue'].reduce((acc, curr) => ({
      ...acc,
      [curr]: generateRandom(rules[ColorTypes.BRGB].min, rules[ColorTypes.BRGB].max)
    }), {})
  }
}

const getColor = (type: ColorTypes) => {
  switch (type) {
    case ColorTypes.RGB:
      return generateRgbColor
    case ColorTypes.HSL:
      return generateHslColor
    case ColorTypes.BRGB:
      return generateBrgbColor
    default:
      return generateRgbColor
  }
}

const generateColors = (count: number = 5, types: Array<ColorTypes>): Array<Color> => {
  let colorTypes = types.filter((type) => !!ColorTypes[type])
  colorTypes = colorTypes.length > 0 ? colorTypes : Object.values(ColorTypes)
  return new Array(count).fill('').map(() => {
    const randType = Math.floor(Math.random() * colorTypes.length);
    return getColor(colorTypes[randType])()
  })
}

export {
  getColor,
  generateColors
}
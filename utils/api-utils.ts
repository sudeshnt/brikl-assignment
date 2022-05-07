import { v4 as uuidv4 } from 'uuid';
import { ColorTypes, Color } from '../types/color-types';
import ColorRules from './color-rules';
import { generateRandom } from './utils';

const generateColor = (type: ColorTypes): Color => {
    const rules: any = ColorRules[type] ?? ColorRules[ColorTypes.RGB]
    return <Color> {
      id: uuidv4(),
      type,
      ...Object.keys(rules).reduce((acc, curr) => ({
        ...acc,
        [curr]: generateRandom(rules[curr].min, rules[curr].max)
      }), {})
    }
}

const generateColors = (count: number = 5, types: Array<ColorTypes>): Array<Color> => {
  let colorTypes = types.filter((type) => !!ColorTypes[type])
  colorTypes = colorTypes.length > 0 ? colorTypes : Object.values(ColorTypes)
  return new Array(count).fill('').map(() => {
    const randType = Math.floor(Math.random() * colorTypes.length);
    return generateColor(colorTypes[randType])
  })
}

export {
  generateColor,
  generateColors
}
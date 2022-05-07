import { ColorTypes } from '../types/color-types';

const ColorRules: any = {
  [ColorTypes.HSL]: {
    hue: {
      min: 0,
      max: 360
    },
    saturation: {
      min: 0,
      max: 100
    },
    lightness: {
      min: 0,
      max: 100
    }
  },
  [ColorTypes.RGB]: {
    red: {
      min: 0,
      max: 255
    },
    green: {
      min: 0,
      max: 255
    },
    blue: {
      min: 0,
      max: 255
    }
  },
  [ColorTypes.BRGB]: {
    red: {
      min: 0,
      max: 10000
    },
    green: {
      min: 0,
      max: 10000
    },
    blue: {
      min: 0,
      max: 10000
    }
  },
  [ColorTypes.XRGB]: {
    red: {
      min: 0,
      max: 5000
    },
    green: {
      min: 0,
      max: 5000
    },
    blue: {
      min: 0,
      max: 5000
    }
  },
}

export default ColorRules
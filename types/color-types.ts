enum ColorTypes {
  RGB = 'RGB',
  HSL = 'HSL',
  BRGB = 'BRGB',
}

type BaseColor<T> = {
  id: string,
  type: T
}

interface RGB extends BaseColor<ColorTypes.RGB> {
  red: number;
  green: number;
  blue: number;
}

interface HSL extends BaseColor<ColorTypes.HSL> {
  hue: number;
  saturation: number;
  lightness: number;
}

interface BRGB extends BaseColor<ColorTypes.BRGB> {
  red: number;
  green: number;
  blue: number;
}

type Color = RGB | HSL | BRGB

type ColorData = {
  colors: Array<Color>
}

export { 
  ColorTypes,
  Color,
  RGB,
  HSL,
  BRGB,
  ColorData
}
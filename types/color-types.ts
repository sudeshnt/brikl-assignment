export enum ColorTypes {
  RGB = 'RGB',
  HSL = 'HSL',
  BRGB = 'BRGB',
  XRGB = 'XRGB',
}

type BaseColor<T> = {
  id: string,
  type: T
}

export interface RGB extends BaseColor<ColorTypes.RGB> {
  red: number;
  green: number;
  blue: number;
}

interface HSL extends BaseColor<ColorTypes.HSL> {
  hue: number;
  saturation: number;
  lightness: number;
}
interface RGBVariant<T> extends BaseColor<T> {
  red: number;
  green: number;
  blue: number;
}

export interface BRGB extends RGBVariant<ColorTypes.BRGB> {}
export interface XRGB extends RGBVariant<ColorTypes.XRGB> {}

// RGB variants
export type RGBVariantColor= RGB | BRGB | XRGB

export type Color = HSL | RGBVariantColor


// api response
export type ColorData = {
  colors: Array<Color>
}
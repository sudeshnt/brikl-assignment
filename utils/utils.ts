import { ColorTypes } from "../types/color-types";
import { rules } from "./api-utils";

const generateRandom = (min: number, max: number): number => {
  let diff = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * diff);
  return rand + min;
}

const convertBrgbToRgb = (value: number) => {
  return Math.round(value / rules[ColorTypes.BRGB].max * rules[ColorTypes.RGB].max)
}

export {
  generateRandom,
  convertBrgbToRgb
}
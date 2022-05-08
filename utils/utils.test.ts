import { ColorTypes } from './../types/color-types';
import { generateRandomNumber, convertToRgb } from './utils';
import { RGBVariantColor, RGB } from '../types/color-types';

describe('Utils', () => {
  test('generateRandomNumber should return a number ', () => {
    const tests = [
      {min: 50, max: 100},
      {min: 0, max: 150},
      {min: 100, max: 200},
    ]
    tests.forEach(({min, max}) => {
      expect(generateRandomNumber(min, max)).toBeGreaterThanOrEqual(min);
      expect(generateRandomNumber(min, max)).toBeLessThanOrEqual(max);
    })
  });
  
  test('convertToRgb should convert RGB variants to RGB correctly', () => {
    const tests: Array<{ test: RGBVariantColor, expected: RGB }> = [
      {
        test: {
          id: '',
          type: ColorTypes.BRGB,
          red: 9843,
          green: 4322,
          blue: 1223
        },
        expected: {
          id: '',
          type: ColorTypes.RGB,
          red: 251,
          green: 110,
          blue: 31
        },
      }, {
        test: {
          id: '',
          type: ColorTypes.RGB,
          red: 59,
          green: 72,
          blue: 70
        },
        expected: {
          id: '',
          type: ColorTypes.RGB,
          red: 59,
          green: 72,
          blue: 70
        },
      }, {
        test: {
          id: '',
          type: ColorTypes.XRGB,
          red: 3452,
          green: 2233,
          blue: 1641
        },
        expected: {
          id: '',
          type: ColorTypes.RGB,
          red: 176,
          green: 114,
          blue: 84
        },
      }
    ]
    tests.forEach(({test, expected}) => {
      expect(convertToRgb(test)).toEqual(expected);
    })
  })
})


import { generateColor, generateColors } from "./api-utils";
import { ColorTypes, RGB, HSL, BRGB } from './../types/color-types'
import _ from 'lodash'

jest.mock('uuid', () => ({
  v4: jest.fn().mockImplementation(() => {
    return '1';
  })
}))

describe('ApiUtils', () => {
  test('generateColor should return a valid color for the type', () => {
    const rgb = generateColor(ColorTypes.RGB) as RGB
    const hsl = generateColor(ColorTypes.HSL) as HSL
    const brgb = generateColor(ColorTypes.BRGB) as BRGB
    expect(rgb.type).toBe(ColorTypes.RGB)
    expect(hsl.type).toBe(ColorTypes.HSL)
    expect(brgb.type).toBe(ColorTypes.BRGB)
    expect(rgb.red).toBeLessThanOrEqual(255)
    expect(rgb.green).toBeLessThanOrEqual(255)
    expect(rgb.blue).toBeLessThanOrEqual(255)
    expect(hsl.hue).toBeLessThanOrEqual(360)
    expect(hsl.saturation).toBeLessThanOrEqual(100)
    expect(hsl.lightness).toBeLessThanOrEqual(100)
    expect(brgb.red).toBeLessThanOrEqual(10000)
    expect(brgb.green).toBeLessThanOrEqual(10000)
    expect(brgb.blue).toBeLessThanOrEqual(10000)
  });

  test('generateColors should call generateColor with correct count and types', () => {
    const tests = [
      {
        test: {
          count: 5,
          types: ['RGB', 'HSL', 'BRGB']
        },
        expected: {
          length: 5,
          types: ['RGB', 'HSL', 'BRGB']
        }
      },
      {
        test: {
          count: undefined,
          types: ['RGB', 'HSL', 'XXX']
        },
        expected: {
          length: 5,
          types: ['RGB', 'HSL']
        }
      },
      {
        test: {
          count: 20,
          types: ['XXX', 'XXX', 'XXX']
        },
        expected: {
          length: 20,
          types: ['RGB', 'HSL', 'BRGB', 'XRGB']
        }
      }
    ]
    tests.forEach(({test, expected}) => {
      const colors = generateColors(test.count, test.types as Array<ColorTypes>)
      const resultColorTypes = _.uniq(colors.map((color) => color.type))
      expect(colors.length).toBe(expected.length)
      expect(_.isEqual(_.intersection(expected.types, resultColorTypes).sort(), resultColorTypes.sort())).toBeTruthy()
    })
  });
})
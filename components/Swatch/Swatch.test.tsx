import { render, screen } from '@testing-library/react'
import Swatch from './Swatch'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
) as any

describe('Swatch Component', () => {
  test('renders title', () => {
    render(<Swatch />)
    const title = screen.getByText(/Get started by inputting type & how many colors you need/i)
    expect(title).toBeInTheDocument()
  })

  test('renders generate button', () => {
    render(<Swatch />)
    const button = screen.getByText(/Generate/i)
    expect(button).toBeInTheDocument()
  })
})
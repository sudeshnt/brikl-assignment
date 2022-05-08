import { render, screen } from '@testing-library/react'
import ColorPicker from './ColorPicker'

describe('Color Picker Component', () => {
  test('renders title', () => {
    render(<ColorPicker />)
    const title = screen.getByText(/recolor svg file by clicking each path element/i)
    expect(title).toBeInTheDocument()
  })

  test('renders svg', () => {
    render(<ColorPicker />)
    const svg = screen.getByTestId(/color-change-svg-2/)
    expect(svg).toBeInTheDocument()
  })
})
import { render, screen } from '@testing-library/react'
import Shapes from './Shapes'

describe('Shapes Component', () => {
  test('renders title', () => {
    render(<Shapes />)
    const title = screen.getByText(/Implement Canvas API to generate shapes/i)
    expect(title).toBeInTheDocument()
  })

  test('renders 3 canvas elements', () => {
    render(<Shapes />)
    const canvases = screen.getAllByTestId(/canvas/i)
    expect(canvases.length).toBe(3)
  })
})
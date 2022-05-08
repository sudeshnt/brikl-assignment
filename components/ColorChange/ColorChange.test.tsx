import { render, screen } from '@testing-library/react'
import ColorChange from './ColorChange'

jest.mock('uuid', () => ({
  v4: jest.fn().mockImplementation(() => {
    return '1';
  })
}))

describe('Color Change Component', () => {
  test('renders title', () => {
    render(<ColorChange />)
    const title = screen.getByText(/Change color of svg element by using DOM manipulation/i)
    expect(title).toBeInTheDocument()
  })

  test('renders button', () => {
    render(<ColorChange />)
    const button = screen.getByText(/Change Color/)
    expect(button).toBeInTheDocument()
  })
})
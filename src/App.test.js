import { render, screen } from '@testing-library/react'
import SamuraiJSApp from './App'

<div role={'main'}></div>
test('renders without crashing', () => {
  render(<SamuraiJSApp />)
  const div = screen.getByRole('img')
  expect(div).toBeInTheDocument()
})


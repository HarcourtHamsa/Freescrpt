import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'



test('increment and decrement buttons are displayed', () => {
  render(<App />)

  expect(screen.getByText("Increment")).toBeTruthy()
  expect(screen.getByText("Decrement")).toBeTruthy()

})


test('increment button adds 1 to the current state', () => {
  const { getByTestId } = render(<App />)

  fireEvent.click(getByTestId("increment"))
  expect(getByTestId("count")).toHaveTextContent(1)

})

test('decrement button removes 1 from the current state', () => {
  const { getByTestId } = render(<App />)

  fireEvent.click(getByTestId("decrement"))
  expect(getByTestId("count")).toHaveTextContent(-1)

})
import {render, screen, fireEvent, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Button from '.'

test('Button exists into html', () => {
  const handleClick = jest.fn()

  render(<Button id="button_option" onClick={handleClick} />)

  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})

test('Should call the handleClick function one time', () => {
  const handleClick = jest.fn()

  render(<Button id="top_rated" children="top_rated" onClick={handleClick} />)

  const button = screen.getByRole('button')
  fireEvent.click(button)

  expect(handleClick).toBeCalled()
})

test('Should call the handleClick function one time', () => {
  const handleClick = jest.fn()

  render(<Button id="upcoming" children="upcoming" onClick={handleClick} />)

  const button = screen.getByRole('button')
  fireEvent.click(button)

  expect(handleClick).toBeCalled()
})
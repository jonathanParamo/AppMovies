import {render, screen, fireEvent, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Input from '.'

test('Should call the handleChange function', () => {
  const handleChange = jest.fn()

  render(<Input id="search" label="search" onChange={handleChange} />)

  const inputEl = screen.getByLabelText('search')
  fireEvent.change(inputEl, { target: { value: 'justice'}})

  expect(handleClick).toBeCalled()
})
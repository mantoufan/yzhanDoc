import Button from '../src/button'

import { render } from '@testing-library/vue'

test('Test Button Role should be button', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

test('Test Button Text should be Button', () => {
  const { getByText } = render(Button)
  getByText('Button')
})

test('Test Button Slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})

test('Default prop type should secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--secondary'))
})

test('Default prop type should secondary', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--primary'))
})

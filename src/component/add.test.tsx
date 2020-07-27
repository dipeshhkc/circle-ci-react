import { render, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Add from './add';
it('checks sum function', () => {
  const { getByPlaceholderText, getByTestId } = render(<Add />);
  const first = getByPlaceholderText('First Number');
  const second = getByPlaceholderText('Second Number');
  const output = getByTestId('output');
  //   fireEvent.change(first, { target: { value: '5' } });
  //   fireEvent.change(second, { target: { value: '5' } });
  userEvent.type(first, '5');
  userEvent.type(second, '5');
  expect(output).toHaveTextContent('11');
});

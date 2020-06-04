import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import ExpirationDateInput from '../ExpirationDateInput';

describe('ExpirationDateInput', () => {
  const currentDate = new Date(Date.now());
  const expiryMonth = currentDate.getFullYear();
  const expiryYear = currentDate.getMonth();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ExpirationDateInput
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        handleExpiryMonthInput={jest.fn()}
        handleExpiryYearInput={jest.fn()}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ExpirationDateInput
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
          handleExpiryMonthInput={jest.fn()}
          handleExpiryYearInput={jest.fn()}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ensure there are 12 items for months', () => {
    const { getByTestId } = render(
      <ExpirationDateInput
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        handleExpiryMonthInput={jest.fn()}
        handleExpiryYearInput={jest.fn()}
      />,
    );
    expect(getByTestId('expiry-month')).toHaveLength(12);
  });

  it('ensure there are 21 items for years', () => {
    const { getByTestId } = render(
      <ExpirationDateInput
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        handleExpiryMonthInput={jest.fn()}
        handleExpiryYearInput={jest.fn()}
      />,
    );
    expect(getByTestId('expiry-year')).toHaveLength(21);
  });
});

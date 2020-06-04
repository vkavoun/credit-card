import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import CreditCardInput from '../CreditCardInput';

describe('CreditCardInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreditCardInput cardNumber={''} handleCardNumberInput={jest.fn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<CreditCardInput cardNumber={''} handleCardNumberInput={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

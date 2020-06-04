import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import SecurityCodeInput from '../SecurityCodeInput';

describe('SecurityCodeInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SecurityCodeInput securityCode={''} handleSecurityCodeInput={jest.fn()} />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<SecurityCodeInput securityCode={''} handleSecurityCodeInput={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

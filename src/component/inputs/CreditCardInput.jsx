import React, { useState } from 'react';
import PropTypes from 'prop-types';

const maskCardNumber = value => value.replace(/(\d{4})/g, 'xxxx ').replace(/(^\s+|\s+$)/, '');

const formatCardNumber = value => value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '');

export default function CreditCardInput({ cardNumber, handleCardNumberInput }) {
  const [isCardNumberMasked, setIsCardNumberMasked] = useState(true);

  const toggleCardNumberMask = () => {
    setIsCardNumberMasked(!isCardNumberMasked);
  };

  return (
    <div key="credit-card-number-wrapper">
      <label>Credit Card Number*</label>
      <input
        id="card-keyboard-manual-entry__keyed-entry-input"
        name="card-keyboard-manual-entry__keyed-entry-input"
        data-testid="card-number"
        autoFocus
        type="tel"
        value={isCardNumberMasked ? maskCardNumber(cardNumber) : formatCardNumber(cardNumber)}
        onChange={e => handleCardNumberInput(e)}
        onFocus={() => toggleCardNumberMask()}
        onBlur={() => toggleCardNumberMask()}
      />
    </div>
  );
}

CreditCardInput.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  handleCardNumberInput: PropTypes.func.isRequired,
};

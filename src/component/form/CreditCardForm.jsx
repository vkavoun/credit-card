import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CreditCardInput from '../inputs/CreditCardInput';
import ExpirationDateInput from '../inputs/ExpirationDateInput';
import SecurityCodeInput from '../inputs/SecurityCodeInput';

export default function CreditCardForm({ hideSubmitButton }) {
  const currentDate = new Date(Date.now());
  const minYear = currentDate.getFullYear();
  const minMonth = currentDate.getMonth();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState(minMonth);
  const [expiryYear, setExpiryYear] = useState(minYear);
  const [securityCode, setSecurityCode] = useState('');

  const handleCardNumberInput = (event) => {
    const keyedEntryInput = String(event.target.value)
      .replace(/\D/g, '')
      .substr(0, 21);

    if (keyedEntryInput === cardNumber) {
      return;
    }
    setCardNumber(keyedEntryInput);
  };

  const handleExpiryMonthInput = (event) => {
    const input = event.target.value;

    if (input === expiryMonth) {
      return;
    }

    setExpiryMonth(input);
  };

  const handleExpiryYearInput = (event) => {
    const input = event.target.value;

    if (input === expiryYear) {
      return;
    }

    setExpiryYear(input);
  };

  const handleSecurityCodeInput = (event) => {
    const keyedEntryInput = String(event.target.value);

    if (keyedEntryInput === securityCode) {
      return;
    }
    setSecurityCode(keyedEntryInput);
  };

  const handleSubmit = (event) => {
    fetch('./api/some.json')
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(data);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };

  return (
    <div>
      <CreditCardInput cardNumber={cardNumber} handleCardNumberInput={handleCardNumberInput} />
      <ExpirationDateInput
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        handleExpiryMonthInput={handleExpiryMonthInput}
        handleExpiryYearInput={handleExpiryYearInput}
      />
      <SecurityCodeInput
        securityCode={securityCode}
        handleSecurityCodeInput={handleSecurityCodeInput}
      />
      {!hideSubmitButton && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
}

CreditCardForm.propTypes = {
  hideSubmitButton: PropTypes.bool.isRequired,
};

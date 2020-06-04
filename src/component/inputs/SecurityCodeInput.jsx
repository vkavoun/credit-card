import React from 'react';
import PropTypes from 'prop-types';

export default function SecurityCodeInput({ securityCode, handleSecurityCodeInput }) {
  return (
    <div>
      <label>CVV (back of card)*</label>
      <input
        id="card-security-code-manual-entry__keyed-entry-input"
        name="card-security-code-manual-entry__keyed-entry-input"
        data-testid="security-code"
        type="tel"
        maxLength={3}
        value={securityCode}
        onChange={e => handleSecurityCodeInput(e)}
      />
    </div>
  );
}

SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  handleSecurityCodeInput: PropTypes.func.isRequired,
};

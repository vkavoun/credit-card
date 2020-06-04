import React from 'react';
import PropTypes from 'prop-types';

const yearOffset = 20;

export default function ExpirationDateInput({
  expiryMonth,
  expiryYear,
  handleExpiryMonthInput,
  handleExpiryYearInput,
}) {
  const currentDate = new Date(Date.now());
  const minYear = currentDate.getFullYear();
  const maxYear = minYear + yearOffset;

  const monthItems = [];
  const yearItems = [];

  for (let x = 1; x <= 12; x++) {
    monthItems.push(
      <option key={`month${x}`} value={x}>
        {x}
      </option>,
    );
  }

  for (let x = minYear; x <= maxYear; x++) {
    const value = parseInt(x.toString().substring(2), 10);
    yearItems.push(
      <option key={`year${value}`} value={value}>
        {value}
      </option>,
    );
  }

  return (
    <div>
      <label>Expiration Date*</label>
      <select
        id="card-expiry-month-manual-entry__keyed-entry-input"
        name="card-expiry-month-manual-entry__keyed-entry-input"
        data-testid="expiry-month"
        value={expiryMonth}
        onChange={e => handleExpiryMonthInput(e)}
      >
        {monthItems}
      </select>
      <select
        id="card-expiry-year-manual-entry__keyed-entry-input"
        name="card-expiry-year-manual-entry__keyed-entry-input"
        data-testid="expiry-year"
        value={expiryYear}
        onChange={e => handleExpiryYearInput(e)}
      >
        {yearItems}
      </select>
    </div>
  );
}

ExpirationDateInput.propTypes = {
  expiryMonth: PropTypes.number.isRequired,
  expiryYear: PropTypes.number.isRequired,
  handleExpiryMonthInput: PropTypes.func.isRequired,
  handleExpiryYearInput: PropTypes.func.isRequired,
};

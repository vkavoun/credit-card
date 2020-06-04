import React from 'react';
import CreditCardForm from './component/form/CreditCardForm';
import CounterComponent from './component/CounterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        Test Form
        <br />
        Form with button:
        <CreditCardForm />
      </div>
      <div><CounterComponent /></div>
    </div>
  );
}

export default App;

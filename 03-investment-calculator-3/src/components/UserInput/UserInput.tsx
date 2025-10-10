import React from 'react';
import type { InvestmentInput } from '../../data/data';

type Props = {
  investment: (val: number, inputVal: keyof InvestmentInput) => void;
  actualInvestment: InvestmentInput;
}

const UserInput = ({investment, actualInvestment}: Props) => {
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>, inputVal: keyof InvestmentInput) => {
    investment(Number(event.target.value), inputVal);
  };

  return (
    <>
      <section id="user-input">
        <div id="user-input">
          <div id="input-group">
            <label htmlFor="initial-investment">Initial Investment</label>
            <input id="initial-investment" 
              name="initialInvestment" 
              onChange={(event) => handleUserInput(event, "initialInvestment")} 
              type='number'
              value={actualInvestment.initialInvestment}/>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input id="annual-investment" 
              name="annualInvestment" 
              onChange={(event) => handleUserInput(event, "annualInvestment")} 
              type='number'
              value={actualInvestment.annualInvestment}/>
          </div>
        </div>
        <div id="user-input">
          <div id="input-group">
            <label htmlFor="expected-return">Expected Return</label>
            <input id="expected-return" 
              name="expectedReturn" 
              onChange={(event) => handleUserInput(event, "expectedReturn")} 
              type='number'
              value={actualInvestment.expectedReturn}/>
            <label htmlFor="duration">Duration</label>
            <input id="duration" 
              name="duration" 
              onChange={(event) => handleUserInput(event, "duration")} 
              type='number'
              value={actualInvestment.duration}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserInput;
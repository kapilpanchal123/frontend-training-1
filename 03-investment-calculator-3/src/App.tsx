import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import type { InvestmentInput } from './data/data';
import { calculateInvestmentResults } from './util/investment';
import Result from './components/Result/Result';

const initialInvestment: InvestmentInput = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12
}

function App() {
  const[investment, setInvestment] = useState<InvestmentInput>(initialInvestment);
  const getInvestments = calculateInvestmentResults(investment);

  const handleInvestment = (val: number, inputVal: keyof InvestmentInput) => {
    setInvestment((prevValue) => ({
      ...prevValue,
      [inputVal]: val
    }));
  }

  console.log(investment);
  return (
    <>
      <div>
        <Header />
        <UserInput actualInvestment={investment} investment={handleInvestment}/>
        <Result postInvestments={getInvestments}/>
      </div>
    </>
  )
}

export default App;

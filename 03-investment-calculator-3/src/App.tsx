import './App.css';
import type { InvestmentInput } from './data/data';
import { calculateInvestmentResults } from './util/investment';

function App() {

  const investment: InvestmentInput = {
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12
  }

  const getInvestments = calculateInvestmentResults(investment);

  return (
    <>
      
      <h1>Investment Calculator</h1>
      <p>{JSON.stringify(getInvestments)}</p>

    </>
  )
}

export default App;

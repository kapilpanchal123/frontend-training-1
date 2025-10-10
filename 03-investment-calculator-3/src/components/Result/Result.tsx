import type { InvestmentInput } from '../../data/data';
import { calculateInvestmentResults, formatter } from '../../util/investment';

type Props = {
  postInvestments: InvestmentInput,
}

const Result = ({postInvestments}: Props) => {
  const getInvestments = calculateInvestmentResults(postInvestments);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment Value</th>
            <th scope="col">Interest (Year)</th>
            <th scope="col">Total Interest</th>
            <th scope="col">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {getInvestments.map((val) => {
            const totalInterest = val.valueEndOfYear - (val.annualInvestment*val.year) - postInvestments.initialInvestment;
            const totalInvested = val.valueEndOfYear - totalInterest;
            return (
              <tr key={val.year}>
                <td>{val.year}</td>
                <td>{formatter.format(val.valueEndOfYear)}</td>
                <td>{formatter.format(val.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default Result;
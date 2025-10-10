import type { InvestmentOutput } from '../../data/data';

type Props = {
  postInvestments: InvestmentOutput[],
}

const Result = ({postInvestments}: Props) => {
  return (
    <>
      <div id="result">
        <table>
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
            {postInvestments.map((val) => {
              return (
                <tr>
                  <th scope="row">{val.year}</th>
                    <td>${val.valueEndOfYear.toFixed(2)}</td>
                    <td>${val.interest.toFixed(2)}</td>
                    <td>${val.interest.toFixed(2)}</td>
                    <td>${val.valueEndOfYear.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Result;
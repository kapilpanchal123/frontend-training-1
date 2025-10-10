import  InvestmentCalculatorLogo from "../../assets/investment-calculator-logo.png";

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header id="header">
        <img src={InvestmentCalculatorLogo} alt="investment calculator logo" />
        <h1>Investment Calculator</h1>
      </header>
    </>
  )
}

export default Header;
import logo from '../../assets/logo.png';
import classes from"./Header.module.css";

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 className={classes.paragraph}>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  )
}

export default Header;
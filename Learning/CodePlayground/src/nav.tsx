import './nav.css'
import { Link } from "react-router-dom";
import { PiUser, PiShoppingCart, PiArrowSquareDown } from "react-icons/pi";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="/logo.svg" alt="candleaf-logo" width="34px" height="34px"/>
        <p id="wordmark">Candleaf</p>
      </div>
      <div className="nav__links">
        <a href="#"><b>Discovery</b> <span className="nav__icon"><PiArrowSquareDown /></span></a>
        <Link to="/"><b>About</b></Link>
        <Link to="/product/4d6a"><b>Contact us</b></Link>
      </div>
      <div className="nav__cta">
        <a href="#"><PiUser /></a>
        <Link to="/cart"><PiShoppingCart /></Link>
      </div>
    </div>
  )
}
import './nav.css'
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
        <a href="#"><b>About</b></a>
        <a href="#"><b>Contact us</b></a>
      </div>
      <div className="nav__cta">
        <a href="#"><PiUser /></a>
        <a href="#"><PiShoppingCart /></a>
      </div>
    </div>
  )
}
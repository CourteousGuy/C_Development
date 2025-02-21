import './nav.css'

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="/logo.svg" alt="candleaf-logo" width="34px" height="34px"/>
        <p id="wordmark">Candleaf</p>
      </div>
      <div className="nav__links">
        <a href="#"><b>Discovery</b>&nbsp; ∨</a>
        <a href="#"><b>About</b></a>
        <a href="#"><b>Contact us</b></a>
      </div>
      <div className="nav__cta">
        <a href="#">(Icon)</a>
        <a href="#">(Icon)</a>
      </div>
    </div>
  )
}
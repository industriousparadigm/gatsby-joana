import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.pinterest.com/joanasalvini/"
            className="icon fa-pinterest"
            target="_blank"
          >
            <span className="label">Pinterest</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/joanasalvini/"
            className="icon fa-instagram"
            target="_blank"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer

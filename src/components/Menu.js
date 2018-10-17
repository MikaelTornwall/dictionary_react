import React from 'react'
import './styles/Menu.css'

const Menu = ({ handleClick }) => (
  <div className="Menu">
    <div className="Menu__title"><strong>-.-. --- -.. .</strong></div> &nbsp;
    <div className="Menu__translator" onClick={handleClick} id="translator">Translator</div>
    <div className="Menu__dictionary" onClick={handleClick} id="dictionary">Dictionary</div>
  </div>
)

export default Menu

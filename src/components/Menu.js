import React from 'react'
import './styles/Menu.css'

const Menu = ({ handleClick }) => (
  <div className="Menu">
    <div className="Menu--translator" onClick={handleClick} id="translator">Translator</div>
    <div className="Menu--dictionary" onClick={handleClick} id="dictionary">Dictionary</div>
  </div>
)

export default Menu

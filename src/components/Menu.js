import React from 'react'
import './styles/Menu.css'

const Menu = ({ translator, dictionary }) => (
  <div className="Menu">
    <div className="Menu--translator" onClick={translator} id="translator"><a href="#">Translator</a></div>
    <div className="Menu--dictionary" onClick={dictionary} id="dictionary"><a href="#">Dictionary</a></div>
  </div>
)

export default Menu

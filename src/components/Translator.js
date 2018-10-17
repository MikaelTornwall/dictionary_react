import React from 'react'
import './styles/Translator.css'

const Translator = ({rows, cols, value, translation, onChange, onClick, toggle, toggleValue }) => (
  <div className="Translator">
    <textarea
      className="Translator__textarea"
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
    />
    <div className="Translator__toggle" onClick={toggle}>
      {toggleValue ? <div>Aa <i className="fas fa-arrow-right"></i> .-</div> : <div>.- <i className="fas fa-arrow-right"></i> Aa</div>}
    </div>
    <button className="Translator__button" onClick={onClick}>Translate</button>
    <div className="Translator__translation">{translation}</div>
  </div>
)

export default Translator

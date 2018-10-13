import React from 'react'
import './styles/Translator.css'

const Translator = ({rows, cols, value, translation, onChange, onClick }) => (
  <div className="Translator">
    <textarea
      className="Translator__textarea"
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
    />
    <div>
      <form className="Translator__select">
        <input type="radio" name="option" value="Letter"></input> To letters
        &nbsp;
        <input type="radio" name="option" value="Morse" checked></input> To morse code
      </form>
    </div>
    <button className="Translator__button" onClick={onClick}>Translate</button>
    <div className="Translator__translation">{translation}</div>
  </div>
)

export default Translator

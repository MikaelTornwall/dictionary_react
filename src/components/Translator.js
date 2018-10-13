import React from 'react'
import './styles/Translator.css'

const Translator = ({rows, cols, value, translation, onChange, onClick }) => (
  <div className="Translator">
    <textarea
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange} />
    <button onClick={onClick}>Translate</button>
    <div className="Translator--translation">{translation}</div>
  </div>
)

export default Translator

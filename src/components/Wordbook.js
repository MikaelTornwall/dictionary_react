import React from 'react'
import './styles/Wordbook.css'

const generateKey = () => {
    const val = Math.floor(Math.random()*100000)
    return val
}

const Wordbook = ({ data }) => (
  <div className="Dictionary">
    <h1 className="Dictionary__title">Dictionary</h1>
    {Object.keys(data).map(key => <div className="Dictionary__translations" key={generateKey()}><span className="Dictionary__letter">{key}</span> <span className="Dictionary__code">{data[key]}</span></div>)}
  </div>
)

export default Wordbook

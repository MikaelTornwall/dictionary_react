import React from 'react'

const generateKey = () => {
    const val = Math.floor(Math.random()*100000)
    return val
}

const Wordbook = ({ data }) => (
  <div>
    Dictionary
    {Object.keys(data).map(key => <p kee={generateKey()}>{key}: {data[key]}</p>)}
  </div>
)

export default Wordbook

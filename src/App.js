import React, { Component } from 'react'
import Menu from './components/Menu'
import Translator from './components/Translator'
import Wordbook from './components/Wordbook'
import Footer from './components/Footer'
import './style/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      render: 'translator',
      toTranslate: '',
      translation: ''
    }
  }

async componentDidMount() {
  // Fetch API data and set object to state
  const morse = {
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--.."
    }

    await this.setState({ data: morse })
    console.log(this.state.data)
}

handleMenu = () => (event) => {
  this.setState({ render: event.target.id })
}

handleChange = () => (event) => {
  console.log(event.target.value)
  this.setState({ toTranslate: event.target.value })
}

translate = () => {
  const stringToTranslate = this.state.toTranslate
  const arr = stringToTranslate.toUpperCase().split('')
  console.log(arr)

  let translation = ''
  arr.map(letter => {
    if (letter === ' ') {
      translation = translation + '\xa0 \xa0 \xa0 \xa0' + '\n'
    } else if (letter === undefined) {
      translation = translation
    } else {
      translation = translation + this.state.data[letter] + ' '
    }
    return translation
  })
  this.setState({ translation })
}

handleClick = () => async () => {
  await this.translate()
}

  render() {

const renderTranslator = () => (
  <Translator
    rows='10'
    cols='50'
    value={this.state.toTranslate}
    translation={this.state.translation}
    onChange={this.handleChange()}
    onClick={this.handleClick()}
    />
)

const renderDictionary = () => (
  <Wordbook
  data={this.state.data}
  />
)

const toggleViews = () => this.state.render === 'translator' ? renderTranslator() : renderDictionary()

    return (
      <div className="App">
        <Menu
          handleClick={this.handleMenu()}
        />
        <div className="App--container">
        {toggleViews()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

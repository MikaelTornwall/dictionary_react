import React, { Component } from 'react'
import Menu from './components/Menu'
import Translator from './components/Translator'
import Wordbook from './components/Wordbook'
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
      E: "."
    }

    await this.setState({ data: morse })
    console.log(this.state.data)
}

renderDictionary = () => (event) => {
  console.log(event.target.id)
  this.setState({ render: 'dictionary' })
}

renderTranslator = () => () => {
  this.setState({ render: 'translator' })
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
      translation = translation + '\n'
    } else {
      translation = translation + this.state.data[letter] + ' '
    }
  })
  this.setState({ translation })
  return
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
          translator={this.renderTranslator()}
          dictionary={this.renderDictionary()}
        />
        <div className="App--container">
        {toggleViews()}
        </div>
      </div>
    )
  }
}

export default App

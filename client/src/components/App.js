import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Wordcloud from './Wordcloud'

class App extends Component {
  state = {
    inputText: '',
  }

  handleChange = ({ target }) => {
    this.setState({ inputText: target.value.toLowerCase() })
  }

  buildWords = () => {
    const excludedWords = [
      'as',
      'by',
      'that',
      'or',
      'be',
      'p',
      'div',
      'those',
      'this',
      'from',
      'are',
      'and',
      'the',
      'is',
      'a',
      'of',
      'to',
      'is',
      'with',
      'for',
      'in',
    ]
    const { inputText } = this.state
    const newString = inputText.replace(/([^a-z^A-Z^\s])/g, '')
    const wordObj = newString.split(' ').reduce((acc, word) => {
      if (excludedWords.includes(word) || !word) return acc
      if (acc[word]) {
        acc[word] = acc[word] + 1
        return acc
      }
      acc[word] = 1
      return acc
    }, {})

    return Object.entries(wordObj)
      .map(([text, value]) => ({ text, value }))
      .sort((a, b) => (a.value - b.value < 0 ? 1 : a.value - b.value > 0 ? -1 : 0))
  }

  render() {
    const words = this.buildWords()
    return (
      <div className="App">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add all the text you want in the word cloud</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={this.handleChange} />
          </Form.Group>
        </Form>
        <Wordcloud words={words} />
        <ul>
          {words.map(({ text, value }) => (
            <li>
              {text} : {value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App

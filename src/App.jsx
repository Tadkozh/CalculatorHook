import React from 'react'
import calculate from './functions/calculate'
import './App.css'

function Display ({value}) {
    return (
      <div className="component-display">
        <div>{value}</div>
      </div>
    )
}

function Button ({name, orange, wide, clickHandler}) {
  const handleClick = () => {clickHandler(name)}

  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]
    return (
      <div className={className.join(' ').trim()}>
        <button onClick={handleClick}>{name}</button>
      </div>
    )
}

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName)
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    )
  }
}

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}

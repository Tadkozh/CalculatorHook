import React from 'react'
import calculate from './functions/calculate'
import './App.css'

import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

export default function App () {

  const [total, setTotal] = React.useState(null)
  const [next, setNext] = React.useState(null)
  const [operation, setOperation] = React.useState(null)

  const handleClick = buttonName => {
    const objCalc = calculate({total, next, operation}, buttonName)

    if (objCalc.total !== undefined) {
      setTotal(objCalc.total)
    }
    if (objCalc.next !== undefined) {
      setNext(objCalc.next)
    }
    if (objCalc.operation !== undefined) {
      setOperation(objCalc.operation)
    }
  }

  return (
    <div className="component-app">
      <Display value={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

import React from 'react'
import { useReducer } from 'react'
import calculate from './functions/calculate'
import './App.css'

import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

const reducer = (state, action) => ({...state, ...action})

export default function App() {
  const [state, setState] = useReducer(reducer, {
    total: null,
    next: null,
    operation: null,
  })

  const handleClick = buttonName => {
    setState(calculate(state, buttonName))
  }

  return (
    <div className="component-app">
      <Display value={state.next || state.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

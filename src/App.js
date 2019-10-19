import React from 'react'
import Form from './components/Form'
import Nav from './components/Nav'
import List from './components/List'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      {/* <h1>Hello</h1> */}
      <Form />
      <List />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card />
    </>
  )
}

export default App

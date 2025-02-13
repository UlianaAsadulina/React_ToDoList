import { useState } from 'react'
import List from './components/List'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List/>
     
    </>
  )
}

export default App

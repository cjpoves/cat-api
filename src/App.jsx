import { useState } from 'react'
import './App.css'
import {WordBar} from './components/WordBar'



export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <WordBar/>
    </>
  )
}

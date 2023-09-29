import { useState , createContext } from 'react'
import Child from './components/child1.jsx';
import './App.css'
const contextDemo = createContext();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hii
      <Child/>
    </>
  )
}

export default App

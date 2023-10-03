import { useState , createContext } from 'react'
import Child from './components/child1.jsx';
import MemoDemo from './components/memo.jsx';
import StateEffectDemo from './hooksDemo.jsx';
import Reducer from './components/reducer.jsx';
import './App.css';
import {useConsole} from './components/useConsole.jsx';
const contextDemo = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [showMsg] = useConsole('Cool');
    // showAlert();    

  return (
    <>
    {/* <StateEffectDemo/>     
    <p>From Parent  </p>     
    {count}
    <contextDemo.Provider value = {{count , setCount}}>
    <Child/>
    </contextDemo.Provider>
    <MemoDemo inputNum = {count} />
    <p>To Parent  </p>
    This is to demo custom hook. On Click of thi button, alerting starts
      as a result of custom hooks
      <button onClick = {()=>showMsg()}>Click :-)</button> */}

 <Reducer/>

    </>
  )
}

export default App;
export {contextDemo};

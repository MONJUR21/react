import { useState,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'


function App() {
  const [count, setCount] = useState(0);
  // const a=useRef(0);
  const ref=useRef();
  useEffect(() => {
    // a.current++;  // This will cause a re-render when a changes.
    // console.log('a changed', a.current);
    ref.current.style.backgroundColor="red"
  },[]);
  return (
    <>
      <h1>{count}</h1>
      <button ref={ref} onClick={()=>{setCount(count+1)}}>click me</button>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
      <NavBar/>
    </>
  )
}

export default App

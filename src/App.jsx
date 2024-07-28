import React, { useState, createContext } from "react";
import NavBar from "./components/NavBar";
import { myContext } from "./components/MyContext";

const App = () => {
  // const [btn, setbtn] = useState(false);
  // const toggle = () => {
  //   btn ? setbtn(false) : setbtn(true);
  // };
  const handleChange = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");
  const getAdjective = () => {
    setAdjective(Math.random() > 0.5? "good" : "bad");
  };
  // useEffect(() => {
  //   alert("useEffect triggered");
  // });
  // useEffect(() => {
  //   alert("Count was changed");
  // }, [count]);
  // useEffect(() => {
  //   alert("I am working only on first render.");
  // }, []);
  return (
    <>
      {/* <myContext.Provider value={{count,setCount}}> */}
      <NavBar adjective={adjective} getAdjective={getAdjective} />
      {/* {btn?<button>Hey I am here</button>:"Nothing"}
      <button onClick={toggle}>toggle me</button> */}
      <button>{count}</button>
      <button onClick={handleChange}>click me</button>
      {/* </myContext.Provider> */}
    </>
  );
};
export default App;

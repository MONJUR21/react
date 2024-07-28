import React, { useContext } from "react";
import Component1 from "./Component1.jsx";
import { myContext } from "./MyContext.js";

const Button = () => {
  const myCon = useContext(myContext);
  return (
    <div>
      <button onClick={()=>{myCon.setCount(myCon.count+1)}}>
        <span>
          <Component1 />
        </span>
        Click me
      </button>
    </div>
  );
};

export default Button;

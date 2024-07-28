import React, { useContext } from "react";
import { myContext } from "./MyContext.js";

const Component1 = () => {
  const myCon = useContext(myContext);
  return <div>{myCon.count}</div>;
};

export default Component1;

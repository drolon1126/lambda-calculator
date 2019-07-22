import React, {useState} from "react";

//import any components needed
import OperatorButton from './OperatorButton.js';

//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operState, setOperState] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operState.map((oper,i)=>{
         return <OperatorButton char={oper.char} value={oper.value} key={i} display={props.display} setDisplay={props.setDisplay} />;
       })}
    </div>
  );
};

export default Operators;
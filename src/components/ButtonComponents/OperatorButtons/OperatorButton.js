import React from "react";


const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        onClick={() => {
          switch (props.char) {
            case '=':
              return props.setDisplay(eval(props.display))
            default:
              return props.setDisplay(`${props.display}${props.value}`)
          }
        }}
        className='opers'
      >{props.char}</button>
    </>
  );
};

export default OperatorButton;

import React from "react";


const OperatorButton = (props) => {
  let gridPlace = 'div';
  switch(props.char){
    case '/':
      gridPlace = 'div';
      break;
    case 'x':
      gridPlace = 'mult';
      break;
    case '-':
      gridPlace = 'minus';
      break;
    case '+':
      gridPlace = 'plus';
      break;
    case '=':
      gridPlace = 'equals';
      break;
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        style={{gridArea: gridPlace, borderRadius:'50px', backgroundColor:'lightblue', borderColor:'lightblue'}} 
        onClick={() => {
          switch (props.char) {
            case '=':
              return props.setDisplay(eval(props.display))
            default:
              return props.setDisplay(`${props.display}${props.value}`)
          }
        }}
      >{props.char}</button>
    </>
  );
};

export default OperatorButton;

import React from "react";

const NumberButton = (props) => {
  let gridPlace = 'one';
  switch(props.num){
    case '1':
      gridPlace = 'one';
      break;
    case '2':
      gridPlace = 'two';
      break;
    case '3':
      gridPlace = 'three';
      break;
    case '4':
      gridPlace = 'four';
      break;
    case '5':
      gridPlace = 'five';
      break;
    case '6':
      gridPlace = 'six';
      break;
    case '7':
      gridPlace = 'seven';
      break;
    case '8':
      gridPlace = 'eight';
      break;
    case '9':
      gridPlace = 'nine';
      break;
    case '0':
      gridPlace = 'zero';
      break;
    case '.':
      gridPlace = 'period';
      break;
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={{gridArea: gridPlace, borderRadius:'50px', backgroundColor:'blue', borderColor:'blue'}}>{props.num}</button>
    </>
  );
};

export default NumberButton;
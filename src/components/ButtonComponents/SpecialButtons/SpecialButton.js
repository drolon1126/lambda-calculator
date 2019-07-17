import React from "react";

const SpecialButton = (props) => {
  let gridPlace = 'C';
  switch(props.char){
    case '+/-':
      gridPlace = 'neg';
      break;
    case 'C':
      gridPlace = 'C';
      break;
    case '%':
      gridPlace = 'percent';
      break;
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={{gridArea: gridPlace, borderRadius:'50px', backgroundColor:'cadetblue', borderColor:'cadetblue'}}>{props.char}</button>
    </>
  );
};

export default SpecialButton;

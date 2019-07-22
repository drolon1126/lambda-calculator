import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        onClick={() => props.setDisplay(
          props.display === 0 ? props.num : `${props.display}${props.num}`
        )}
        className = 'nums'
      >{props.num}</button>
    </>
  );
};

export default NumberButton;
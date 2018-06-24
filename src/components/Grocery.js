import React from 'react';

let Grocery = props => {
  let groceryName = props.name;

  return(
    <li>
      {groceryName}
      <button type='button' onClick={ (event) => { alert(`The ${groceryName} button was clicked`)} }> Delete</button>
    </li>
  )
}

export default Grocery;

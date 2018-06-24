import React from 'react';

const GroceryList = props => {
  return(
  <div>
    <ul>
      <li>
        Oranges
        <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
      </li>
      <li>
        Bananas
        <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
      </li>
      <li>
        Bread
        <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
      </li>
    </ul>
  </div>
)

};

export default GroceryList;

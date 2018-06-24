import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {
  let groceryItems = props.data;
  let groceries = groceryItems.map(item => {
    return(
      <Grocery
        key={item.id}
        name={item.name}
      />
    )
  })
  return(
  <div>
    <ul>
      {groceries}
    </ul>
  </div>
)

};

export default GroceryList;

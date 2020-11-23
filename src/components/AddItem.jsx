import React from 'react';


const RemoveItem = ({deleteLastItem, noItemsFound}) => {
  return (
    <button onClick={deleteLastItem} disabled={noItemsFound()}>
      Delete Last Item
    </button>
  );
}

export default RemoveItem;
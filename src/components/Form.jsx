import React from 'react';


const Form = ({value, handleChange, addItem, inputIsEmpty}) => {
  return (
  	<div>
      <h2>Shopping List</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    </div>
  );
}

export default Form;

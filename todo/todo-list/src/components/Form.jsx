import React from 'react';
import './Form.css'

const Form = ({color, value, onChange, onCreate, onKeyPress}) => {
  console.log(color);
  return (
    <div className="form">
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} style={{ color: color }}/>
      <button className="create-button" onClick={onCreate}>추가</button>
    </div>
  );
};

export default Form;
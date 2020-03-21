import React from 'react';
import './Form.css'

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <button className="create-button" onClick={onCreate}>추가</button>
    </div>
  );
};

export default Form;
import React, { useState } from 'react';
import './Input.scss';

const Input = ({ label, type, name, value, onChange }) => {
  const [labeled, setLabeled] = useState(false);

  return (
    <div className="Input form-group">
      <label
        className={`Input__label ${labeled === true || value.length > 0 ? 'Input__label--active' : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="Input__field form-control"
        type={type}
        name={name}
        id={name}
        value={value}
        onFocus={() => setLabeled(true)}
        onBlur={() => value.length === 0 ? setLabeled(false) : undefined}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;

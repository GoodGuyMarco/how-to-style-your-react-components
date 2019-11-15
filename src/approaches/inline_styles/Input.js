import React, { useState } from 'react';

const styles = {
  container: {
    position: 'relative',
  },
  label: {
    position: ' absolute',
    top: '0.75rem',
    left: '0.5rem',
    fontSize: '1rem',
    color: 'grey',
    background: '#FFF',
    transition: '.2s all',
  },
  field: {
    width: '100%',
    outline: 'none',
    padding: '0.75rem 0.5rem',
    fontSize: '1rem',
    border: '1px solid grey',
  },
};

const Input = ({ label, type, name, value, onChange }) => {
  const [labeled, setLabeled] = useState(false);

  return (
    <div style={styles.container}>
      <label
        htmlFor={name}
        style={labeled === true || value.length > 0
          ? { ...styles.label, transform: 'translateY(-1.15rem)', fontSize: '0.75rem' }
          : styles.label
        }
      >{label}</label>
      <input
        style={styles.field}
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

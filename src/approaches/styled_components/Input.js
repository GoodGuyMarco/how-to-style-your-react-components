import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 0.75rem;
  left: 0.5rem;
  font-size: ${props => props.active === true || props.value.length > 0 ? '0.75rem' : '1rem'};
  color: grey;
  background: #FFF;
  transition: .2s all;
  transform: ${props => props.active === true || props.value.length > 0 ? 'translateY(-1.15rem)' : ''};
`;

const Field = styled.input`
  width: 100%;
  outline: none;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  border: 1px solid grey;
  
  &:focus {
    border: 1px solid #39bbcf;
  }
`;

const Input = ({ label, type, name, value, onChange }) => {
  const [labeled, setLabeled] = useState(false);

  return (
    <Container>
      <Label htmlFor={name} active={labeled} value={value}>{label}</Label>
      <Field
        type={type}
        name={name}
        id={name}
        value={value}
        onFocus={() => setLabeled(true)}
        onBlur={() => value.length === 0 ? setLabeled(false) : undefined}
        onChange={event => onChange(event.target.value)}
      />
    </Container>
  );
};

export default Input;

import React, { useState } from 'react';
import Input from './Input';
import ExampleBox from '../../ExampleBox';

const StyledComponents = () => {
  const [value, setValue] = useState('Present approaches for styling React components');

  return (
    <>
      <ExampleBox headline="Styled components">
        <Input
          label="Topic for open friday"
          name="approach"
          type="text"
          value={value}
          onChange={value => setValue(value)}
        />
      </ExampleBox>
      <h3>References</h3>
      <a href="https://github.com/emotion-js/emotion">https://github.com/emotion-js/emotion</a>
    </>
  );
};

export default StyledComponents;

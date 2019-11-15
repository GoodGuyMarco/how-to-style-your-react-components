import React, { useState } from 'react';
import Input from './Input';
import ExampleBox from '../../ExampleBox';

const InlineStyles = () => {
  const [value, setValue] = useState('Present approaches for styling React components');

  return (
    <>
      <ExampleBox headline="Inline Styles">
        <Input
          label="Topic for open friday"
          name="approach"
          type="text"
          value={value}
          onChange={value => setValue(value)}
        />
      </ExampleBox>
      <h3>References</h3>
      <a href="https://speakerdeck.com/vjeux/react-css-in-js">https://speakerdeck.com/vjeux/react-css-in-js</a>
    </>
  );
};

export default InlineStyles;

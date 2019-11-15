import React, { useState } from 'react';
import Input from './Input';
import ExampleBox from '../../ExampleBox';

const ComponentStylesWithSCSSAndBEM = () => {
  const [value, setValue] = useState('Present approaches for styling react components');

  return (
    <>
      <ExampleBox headline="Component styles with SCSS and BEM">
        <Input
          label="Topic for open friday"
          name="approach"
          type="text"
          value={value}
          onChange={value => setValue(value)}
        />
      </ExampleBox>
      <h3>References</h3>
      <a href="http://getbem.com/introduction/">http://getbem.com/introduction/</a>
    </>
  );
};

export default ComponentStylesWithSCSSAndBEM;

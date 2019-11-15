import React, { useState } from 'react';
import Input from './Input';
import ExampleBox from '../../ExampleBox';

const MixUpWithYourFavouriteCSSFramework = () => {
  const [value, setValue] = useState('Present approaches for styling React components');

  return (
    <>
      <ExampleBox headline="Mix up with your favourite CSS framework">
        <Input
          label="Topic for open friday"
          name="approach"
          type="text"
          value={value}
          onChange={value => setValue(value)}
        />
      </ExampleBox>
      <h3>References</h3>
      <a href="https://getbootstrap.com/docs/4.3/components/forms">https://getbootstrap.com/docs/4.3/components/forms</a>
    </>
  );
};

export default MixUpWithYourFavouriteCSSFramework;

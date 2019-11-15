import React from 'react';

const ExampleBox = ({ headline, children }) => (
  <div
    style={{
      position: 'relative',
      padding: '1rem 1rem 2rem 1rem',
      margin: '4rem 0',
      border: '1px solid lightgrey'
    }}
  >
    <span style={{ position: 'absolute', top: '0.2rem', right: '0.4rem', color: 'lightgrey' }}>EXAMPLE</span>
    <h2 style={{ marginBottom: '2rem' }}>{headline}</h2>
    {children}
  </div>
);

export default ExampleBox;

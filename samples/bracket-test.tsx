// Test file to reproduce bracket miscoloring issue
import React from 'react';

function Component() {
  const name = "test";
  
  return (
    <div>
      <div className="ml-auto">{name}</div>
      <span>{name}</span>
      <p>Arrays: [1, 2, 3]</p>
      <div>Objects: {name: "value"}</div>
      <div>Nested: {items.map(item => ({ value: item }))}</div>
    </div>
  );
}

export default Component;
// Test file to reproduce bracket miscoloring issue
import React from 'react';

function Component() {
  const name = "test";
  const items = [1, 2, 3];
  
  // Testing different bracket types for consistent coloring:
  
  // Curly braces - should match in color
  const obj = { key: "value", nested: { inner: true } };
  
  // Square brackets - should match in color
  const arr = [1, 2, 3, [4, 5, 6]];
  
  // Parentheses - should match in color
  const result = func(param1, func2(nested));
  
  // Mixed brackets - each type should be consistent
  const mixed = items.map((item) => ({ value: item, array: [item] }));
  
  return (
    <div>
      <div className="ml-auto">{name}</div>
      <span>{name}</span>
      <p>Arrays: [1, 2, 3]</p>
      <div>Objects: {name: "value"}</div>
      <div>Nested: {items.map(item => ({ value: item }))}</div>
      <div>More tests: ({mixed})</div>
    </div>
  );
}

export default Component;
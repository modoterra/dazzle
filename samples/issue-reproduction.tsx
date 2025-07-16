// Exact reproduction of the issue shown in the image
const ExampleComponent = ({ name }) => {
  return <div className="ml-auto">{name}</div>;
};

// Additional bracket tests
const moreTests = {
  curlyBraces: { key: "value" },
  squareBrackets: [1, 2, 3],
  parentheses: func(param),
  nested: { array: [1, { nested: true }], func: call() }
};
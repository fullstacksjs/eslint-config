const React = {
  createElement: (tag, props, children) => ({ tag, props, children }),
};

export default {
  component: () => React.createElement('div', null, 'Hello, world!'),
};

export const A = React.createElement('div', null, 'Hello, world!');

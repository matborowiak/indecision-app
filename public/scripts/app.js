'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'p',
  null,
  'Does this change?'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.
const App = function() {
}

// Take this component's generated HTML and put it on the page (that is, in the DOM).
ReactDOM.render(React.createElement(App, null), document.querySelector('.container'));

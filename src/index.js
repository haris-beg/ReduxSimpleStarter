import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDhW19GlDAB_9QuESJEGQbeGPcAuG1-0N4';

// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { vidoes: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (vidoes) => {
      this.setState = { vidoes: vidoes };
    });
  }
  render() {
    return <div><SearchBar /></div>;
  }
}

// Take this component's generated HTML and put it on the page (that is, in the DOM).
ReactDOM.render(<App/>, document.querySelector('.container'));

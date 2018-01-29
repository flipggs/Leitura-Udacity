import React, { Component } from 'react';
import Header from './Components/Header'

import Home from './Views/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="page-wrap">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="page-wrap">
          <h1>Conteudo</h1>
        </div>
      </div>
    );
  }
}

export default App;

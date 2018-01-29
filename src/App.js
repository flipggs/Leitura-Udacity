import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header'

import Home from './Views/Home'
import NotFound from './Views/NotFound'
import Category from './Views/Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="page-wrap">
          <Switch>
            <Route path="/:category" component={Category} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

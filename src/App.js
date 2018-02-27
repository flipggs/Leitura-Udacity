import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header'

import Home from './Views/Home'
import NotFound from './Views/NotFound'
import Category from './Views/Category'
import PostDetail from './Views/PostDetail/index';
import FormPost from './Views/FormPost/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="page-wrap">
          <Switch>
            <Route path="/edit-post/:post_id" component={FormPost} />
            <Route path="/new" component={FormPost} />
            <Route path="/:category/:post_id" component={PostDetail} />
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

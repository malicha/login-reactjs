import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './container/home/home'
import Login from './component/login'

class App extends Component {



  render() {
    return (
      <div>
        <Login />
      </div>

    )
  }
}
export default App;
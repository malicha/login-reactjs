import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './container/home/home'
import Login from './component/login'
class App extends Component {


  state = {
    isLoading: true,
    isLogin: false
  }

  componentWillMount() {
    var checkStatusFromStorage = localStorage.getItem('sudah login')
    if (checkStatusFromStorage === null) {
      this.setState({
        isLogin: false
      })
    }
    else {
      this.setState({
        isLogin: true
      })
    }
  }



  render() {
    if (this.state.isLogin === true) {
      return (
        <div>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/login' component={Login} />
          </Switch>
          <Redirect to="/home" />
        </div>
      )
    }
    else {
      return (
        <div>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/login' component={Login} />
          </Switch>
          <Redirect to="/login" />
        </div>
      )
    }
  }
}
export default App;
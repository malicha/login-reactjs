import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class home extends Component {
  handlelogout = () => {
    localStorage.removeItem('sudah login');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handlelogout}>
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default home;

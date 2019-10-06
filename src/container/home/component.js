import React from 'react';
import Button from '@material-ui/core/Button';

class Component extends React.Component {
  handlelogout = () => {
    localStorage.removeItem('sudah login');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>selamat datang</h1>
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

export default Component;

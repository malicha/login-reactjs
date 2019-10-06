import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.welcome}>
            <h1>selamat datang</h1>
          </Grid>
          <Grid item xs={12} className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handlelogout}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Component;

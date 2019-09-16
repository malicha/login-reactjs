import React from 'react'
import User from '../../datacenter/user-datacenter'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

class Component extends React.Component {
    handleLogin = () => {
        var txtEmail = document.getElementById('txtEmail')
        var txtPass = document.getElementById('txtPass')
        if (txtEmail.value == '' || txtPass.value == '' || txtEmail.value === undefined || txtPass.value == undefined) {
            alert('harap isi password dan email');
        } else {
            var checkUser = User.find(i => i.account.email === txtEmail.value && i.account.password === txtPass.value)
            if (checkUser) {
                localStorage.setItem('sudah login', "true")
                setTimeout(() => {
                    window.location.href = "/home"
                }, 1000);
            }
            else {
                alert('password dan email salah');
            }
        }
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.form}>
                <TextField
                    multiline
                    rowsMax="4"
                    placeholder='email'
                    id='txtEmail'
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    multiline
                    rowsMax="4"
                    placeholder='password'
                    id='txtPass'
                    className={classes.textField}
                    margin="normal"
                />
                <div>
                    <Button variant="contained" color="primary" onClick={this.handleLogin}>Login</Button>
                </div>
            </div>
        )
    }
}


export default Component
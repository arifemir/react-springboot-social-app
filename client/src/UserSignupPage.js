import React, {Component} from 'react';
import axios from 'axios';

class UserSignupPage extends Component {

    state = {
        userName: null,
        displayName: null,
        password: null,
        passwordRepeat: null
    }

    onChangeFields = event => {
        const {value, name} = event.target
        this.setState({[name]: value});
    }

    onClickSignUp = event => {
        event.preventDefault()
        const {userName, displayName, password} = this.state
        const body = { userName, displayName, password }
        axios.post('/api/1.0/users', body)
    }

    render() {
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Sign Up</h1>
                    <div className='form-group'>
                        <label>Username</label>
                        <input className='form-control' name='userName' onChange={this.onChangeFields} type='text'/>
                    </div>
                    <div className='form-group'>
                        <label>Display Name</label>
                        <input className='form-control' name='displayName' onChange={this.onChangeFields} type='text'/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' name='password' onChange={this.onChangeFields} type='password'/>
                    </div>
                    <div className='form-group'>
                        <label>Password Repeat</label>
                        <input className='form-control' name='passwordRepeat' onChange={this.onChangeFields} type='password'/>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary' onClick={this.onClickSignUp} >Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserSignupPage;
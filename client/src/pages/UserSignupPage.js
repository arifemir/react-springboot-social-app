import React, {Component} from 'react';
import {signup} from '../api/apiCalls';

class UserSignupPage extends Component {

    state = {
        userName: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false
    }

    onChangeFields = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    onClickSignUp = event => {
        event.preventDefault()
        const {userName, displayName, password} = this.state
        this.setState({pendingApiCall: true})
        const body = { userName, displayName, password }
        signup(body)
        .then(() => this.setState({pendingApiCall: false}))
        .catch(() => this.setState({pendingApiCall: false}))
    }

    render() {
        const {pendingApiCall} = this.state

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
                        <button disabled={pendingApiCall} className='btn btn-primary' onClick={this.onClickSignUp} >
                        {pendingApiCall ? 
                            <span className='spinner-border spinner-border-sm'/> :
                            <span>Sign Up</span>
                        } 
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserSignupPage;
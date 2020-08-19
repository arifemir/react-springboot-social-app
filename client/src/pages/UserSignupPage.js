import React, {Component} from 'react';
import {signup} from '../api/apiCalls';
import Input from '../components/input';

class UserSignupPage extends Component {

    state = {
        userName: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    }

    onChangeFields = event => {
        const {value, name} = event.target
        const errors = {...this.state.errors}
        errors[name] = undefined
        this.setState({[name]: value, errors})
    }

    onClickSignUp = async event => {
        event.preventDefault()
        const {userName, displayName, password} = this.state
        this.setState({pendingApiCall: true})
        const body = { userName, displayName, password }
        
        try {
            const response = await signup(body);
        } catch (error) {
            if (error.response.data.validationErrors) {
                this.setState({errors: error.response.data.validationErrors})
            }
        }
        this.setState({pendingApiCall: false})
    }

    render() {
        const {pendingApiCall, errors} = this.state
        const {userName, displayName} = errors
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Sign Up</h1>
                    <Input label='Username' name='userName' onChangeFields={this.onChangeFields} error={userName}/>
                    <Input label='Display Name' name='displayName' onChangeFields={this.onChangeFields} error={displayName}/>
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
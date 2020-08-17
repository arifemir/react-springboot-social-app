import React, {Component} from 'react';

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

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label htmlFor=''>Username</label>
                    <input name='userName' onChange={this.onChangeFields} type='text'/>
                </div>
                <div>
                    <label htmlFor=''>Display Name</label>
                    <input name='displayName' onChange={this.onChangeFields} type='text'/>
                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input name='password' onChange={this.onChangeFields} type='password'/>
                </div>
                <div>
                    <label htmlFor="">Password Repeat</label>
                    <input name='passwordRepeat' onChange={this.onChangeFields} type='password'/>
                </div>
                <button>Sign Up</button>
            </form>
        );
    }
}

export default UserSignupPage;
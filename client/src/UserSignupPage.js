import React, {Component} from 'react';

class UserSignupPage extends Component {
    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Display Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <label htmlFor="">Password Repeat</label>
                    <input type="password"/>
                </div>
                <button>Sign Up</button>
            </form>
        );
    }
}

export default UserSignupPage;
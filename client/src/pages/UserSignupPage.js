import React, {Component} from 'react';
import {signup} from '../api/apiCalls';
import Input from '../components/input';
import {withTranslation} from 'react-i18next'

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
        const {t} = this.props;
        const {value, name} = event.target
        const errors = {...this.state.errors}
        errors[name] = undefined

        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t('Password mismatch')
            } else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.passwordRepeat = t('Password mismatch')
            } else {
                errors.passwordRepeat = undefined
            }
        }

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
        const {t} = this.props
        const {pendingApiCall, errors} = this.state
        const {userName, displayName, password, passwordRepeat} = errors

        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>{t('Sign Up')}</h1>
                    <Input label={t('Username')} name='userName' onChangeFields={this.onChangeFields} error={userName} type='text'/>
                    <Input label={t('Display name')} name='displayName' onChangeFields={this.onChangeFields} error={displayName} type='text'/>
                    <Input label={t('Password')} name='password' onChangeFields={this.onChangeFields} error={password} type='password' />
                    <Input label={t('Password Repeat')} name='passwordRepeat' onChangeFields={this.onChangeFields} error={passwordRepeat} type='password' />
                    
                    <div className='text-center'>
                        <button disabled={pendingApiCall || passwordRepeat !== undefined} className='btn btn-primary' onClick={this.onClickSignUp} >
                        {pendingApiCall ? 
                            <span className='spinner-border spinner-border-sm'/> :
                            <span>{t('Sign Up')}</span>
                        } 
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}



export default withTranslation()(UserSignupPage);